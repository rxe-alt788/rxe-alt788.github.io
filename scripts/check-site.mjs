import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { resolve, relative, extname } from "node:path";

const root = process.cwd();
const htmlFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (extname(entry.name).toLowerCase() === ".html") htmlFiles.push(full);
  }
}
walk(root);

const errors = [];
for (const file of htmlFiles) {
  const source = readFileSync(file, "utf8");
  const rel = relative(root, file);
  if (!/<html\b[^>]*\blang\s*=/.test(source)) errors.push(`${rel}: missing html lang attribute`);
  if (!/<title>\s*[^<]+\s*<\/title>/i.test(source)) errors.push(`${rel}: missing or empty title`);
  if (!/<meta\b[^>]*name=["']viewport["']/i.test(source)) errors.push(`${rel}: missing viewport metadata`);

  const ids = new Set([...source.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]));
  for (const match of source.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    const href = match[1].trim();
    if (!href || /^(https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(href)) continue;
    const [pathPart, hashPart] = href.split("#", 2);
    if (hashPart && !pathPart && !ids.has(decodeURIComponent(hashPart))) {
      errors.push(`${rel}: broken fragment #${hashPart}`);
      continue;
    }
    if (!pathPart) continue;
    const cleanPath = decodeURIComponent(pathPart.split("?")[0]);
    const target = cleanPath.startsWith("/")
      ? resolve(root, `.${cleanPath}`)
      : resolve(file.substring(0, file.lastIndexOf("/")), cleanPath);
    let resolvedTarget = target;
    if (existsSync(target) && statSync(target).isDirectory()) resolvedTarget = resolve(target, "index.html");
    if (!existsSync(resolvedTarget)) {
      errors.push(`${rel}: missing local target ${href}`);
      continue;
    }
    if (hashPart && extname(resolvedTarget).toLowerCase() === ".html") {
      const targetSource = readFileSync(resolvedTarget, "utf8");
      const targetIds = new Set([...targetSource.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]));
      if (!targetIds.has(decodeURIComponent(hashPart))) errors.push(`${rel}: target ${href} has no matching fragment`);
    }
  }
}
if (errors.length) {
  console.error("Site checks failed:");
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}
console.log(`Site checks passed: ${htmlFiles.length} HTML pages, local links and fragments resolved, required metadata present.`);
