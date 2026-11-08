# Trinity Collective
### Research · Technology · Change

**Live portfolio:** https://rxe-alt788.github.io/  
**Research index:** [META](https://github.com/rxe-alt788/META)  
**TrinityCo:** https://trinityco-ai.co/

Trinity Collective brings together public-interest tools, independent research and advisory practice. The common thread is practical: make hidden structure visible, distinguish evidence from assumption, and turn useful insight into working capability.

This repository is the public portfolio and presentation layer. It is not the source of truth for every project's code or technical history.

## Project register

| Project | What it is | Current status | Canonical home |
|---|---|---|---|
| **4NICO** | Environmental decision support for beach management. Separates environmental conditions from observation confidence; does not predict attacks or certify safety. | Validation machine complete; Phase 1 observed BOM rainfall input in validation. Model performance claims remain pending. | [NICO](https://github.com/rxe-alt788/NICO) |
| **CivicOS** | Proposed coordination and interpretation layer for better use of existing civic infrastructure and public data. | Concept / pilot design. No claim of a deployed city-wide service. | [Project page](projects/civicos/) |
| **Dependency Compression** | General-purpose method for identifying necessary conditions, pathways, assumptions and avoidable sequencing across complex systems. | Research and prototype work. | [Dependency Field](https://github.com/rxe-alt788/dependency-field) · [Research note](https://trinityco-ai.co/the-queue-that-shouldnt-exist-sequencing-inefficiency-and-dependency-compression/) |
| **Observatory** | Experimental spatial environment for organising goals, work, dependencies and AI-assisted reasoning. | Active prototype. | [Observatory](https://github.com/rxe-alt788/Observatory) |
| **Society & Technology** | Research index covering institutional systems, AI verification, mathematics, strategic dependencies and technology's effects on society. | Ongoing research programme. | [META](https://github.com/rxe-alt788/META) |
| **TrinityCo** | Applied research, strategic advisory and publications. | Active practice. | [TrinityCo](https://trinityco-ai.co/) |

## Repository map

- `index.html` — public portfolio homepage.
- `projects/civicos/` — CivicOS project page and project brief.
- `scripts/check-site.mjs` — dependency-free local link and page-metadata checks.
- `.github/workflows/site-check.yml` — automated checks on pushes and pull requests.
- `SECURITY.md` — security reporting and repository handling.
- `README.md` — this guide.

Project code, technical documentation, validation results and release history belong in their respective repositories. Portfolio copy should link to those canonical homes and should never imply that a prototype is a validated or deployed service.

## Evidence and status conventions

- **Prototype** means working software exists, but its real-world effectiveness may not have been established.
- **Under validation** means a defined validation process is running; it does not imply a successful result.
- **Concept / pilot design** means a proposed approach, not an operating service.
- Performance figures must be labelled with their dataset, period, method and limitations. Engineering metrics are not model-accuracy metrics.

## Working principles

- Separate observed data, synthetic fixtures, assumptions and hypotheses.
- Make project status and limitations visible.
- Keep credentials, tokens, private personal information and production data out of the repository.
- Prefer reviewed, traceable changes to direct unreviewed edits on the publishing branch.
- Test local links and page structure before publishing.

## Contact

John Dunn · [john@trinityco-ai.co](mailto:john@trinityco-ai.co) · +61 411 833 559
