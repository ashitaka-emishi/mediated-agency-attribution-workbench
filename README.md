# Mediated Agency Attribution Workbench

**MAAW** is a traceable biblical-theological research environment for comparing
agency attributions across human, psychological, collective, institutional,
symbolic, historical, textual, and nonhuman spiritual levels.

> Status: research scaffold. Data, categories, and findings remain provisional
> until they pass explicit review and adjudication gates.

## Problem Statement

Biblical texts speak of agents, powers, spirits, rulers, authorities, wisdom,
folly, nations, institutions, and symbolic orders in ways that resist simple
classification. MAAW develops a disciplined method for relating those levels
without collapsing textual, theological, historical, psychological, social,
institutional, symbolic, and spiritual claims into one another.

The project is a biblical-theological inquiry first. Interdisciplinary tools
serve the biblical question: how should agency, mediation, responsibility, and
spiritual powers be interpreted in Scripture and in carefully bounded
applications of scriptural interpretation?

## Repository Role

MAAW uses tooling patterns common to the surrounding research workbench style:
canonical JSON records, schema contracts, validation, generated indexes, human
review gates, Python analysis helpers, and Quarto publication.

MAAW is not related to political-pathology work. It does not sit beside,
coordinate with, or feed political-pathology repositories. Any future external
integration must be approved and scoped in a separate issue.

## Biblical Seed Cases

- **1 Kings 22**: the lying spirit, Ahab, prophetic mediation, royal decision-making;
- **Job 1-2**: the satan, divine council, suffering, secondary causes, permission, and agency;
- **Daniel 10**: prince of Persia/Greece, angelic conflict, imperial history, delayed mediation;
- **Mark 5 / Synoptic Gerasene demoniac**: demons, embodiment, social location, liberation;
- **Ephesians 6 / Pauline powers**: rulers, authorities, cosmic powers, armor, and discernment;
- **Revelation 13 / Beast and Babylon**: empire, idolatry, symbolic agency, worship, and coercion.

## Governing Principles

1. Observations are easier to record than agency claims.
2. Agent, agency, mechanism, medium, manifestation, and interpretation remain distinct.
3. Textual, causal, and moral/theological evaluation remain distinct.
4. More observable explanations must be assessed before a less observable agent is invoked.
5. A complete lower-level mechanism does not by itself disprove spiritual mediation.
6. `underdetermined` and `compatible-but-unnecessary` are valid results.
7. AI may propose and compare hypotheses; it may not approve spiritual attribution.
8. Generated artifacts never become canonical merely because they were generated.

## Quick Start

Requirements: Node.js 20+, Python 3.11+, and Quarto for site rendering.

```sh
npm run validate
npm test
npm run test:py
npm run build
npm run summary
```

Create a case:

```sh
npm run case:new -- my-case-id "My Case Title"
```

Open `MAAW.code-workspace` in VS Code.

## Canonical Flow

```text
Source -> Passage -> Observation -> Event/Actor/Mechanism/Medium
       -> Attribution Hypothesis -> Argument Graph -> Finding
       -> Human Review -> Publication or Explicitly Scoped External Export
```

## Repository Map

- `maaw.project.json` - machine-readable charter
- `schemas/` - JSON Schema contracts
- `docs/CODEBOOK.md` - core attribution category definitions
- `docs/BLINDED_CODING_PACKET_TEMPLATE.md` - reviewer packet template
- `data/ontology/` - ontology and controlled vocabulary
- `data/traditions/` - interpretive lenses
- `data/cases/` - canonical case records
- `data/generated/` - generated indexes
- `src-js/` - validation and generation tooling
- `src-py/` - analytical Python package
- `tests/`, `test-py/` - executable tests
- `site/` - Quarto publication project
- `.agents/`, `AGENTS.md` - Codex workflow instructions

## First Pilot

The included pilot is **the lying spirit before Ahab** from **1 Kings 22**:

> In 1 Kings 22, how should agency be attributed across YHWH's judgment, the
> spirit's proposal, prophetic mediation, Ahab's desire, and royal
> decision-making?

The pilot compares Ahab's selective human agency, royal court consultation,
prophetic symbolic mediation, the lying spirit's narrated mediation, and
divine judicial agency. Its finding remains provisional and private.

## License

Original project code, schemas, data structures, and documentation are MIT
licensed. Third-party sources retain their original rights.
