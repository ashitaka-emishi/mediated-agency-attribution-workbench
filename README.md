# Mediated Agency Attribution Workbench

**MAAW** is a traceable research platform for comparing agency attributions
across human, psychological, collective, institutional, symbolic, technical,
emergent, and nonhuman spiritual levels.

> Status: research scaffold. Data, categories, and findings remain provisional
> until they pass explicit review and adjudication gates.

## Problem statement

> Existing scholarship offers separate accounts of spiritual powers, emergent
> realities, collective intentionality, institutional agency, and recursive
> structure–agency relations, but lacks an integrated method for distinguishing
> and relating them in concrete cases. This project seeks to develop criteria for
> determining when an observed pattern should be attributed to a human person, a
> psychological mechanism, a collective agent, an institution, a symbolic order,
> a nonhuman spiritual intelligence, or a layered interaction among them. Its
> purpose is neither to reduce spiritual agency to social mechanisms nor to invoke
> spiritual agents where psychological and institutional causation is sufficient,
> but to establish a disciplined model of mediated and multilevel agency.

## Repository role

MAAW is designed to sit beside:

- `political-pathology-workbench`: parent coordination and promoted findings
- `lincoln-metaphor-analysis`: deep-case corpus and rhetoric evidence
- `sacrifice-law-workbench`: comparative sacrifice-law research
- `john-brown-metaphor-analysis`: deep-case process and intervention evidence

MAAW owns agency-attribution hypotheses, mechanisms, media, argument graphs,
alternative explanations, and attribution adjudication. It exports only
human-reviewed candidates to the Political Pathology Workbench.

## Governing principles

1. Observations are easier to record than agency claims.
2. Agent, agency, mechanism, medium, manifestation, and interpretation remain distinct.
3. Causal attribution remains separate from moral or Christological evaluation.
4. Lower-level explanations must be assessed before a less observable agent is invoked.
5. A complete lower-level mechanism does not by itself disprove spiritual mediation.
6. `underdetermined` and `compatible-but-unnecessary` are valid results.
7. AI may propose and compare hypotheses; it may not approve spiritual attribution.
8. Generated artifacts never become canonical merely because they were generated.

## Quick start

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

## Canonical flow

```text
Source -> Passage -> Observation -> Event/Actor/Mechanism/Medium
       -> Attribution Hypothesis -> Argument Graph -> Finding
       -> Human Review -> PPW Export or Publication
```

## Repository map

- `maaw.project.json` — machine-readable charter
- `schemas/` — JSON Schema contracts
- `data/ontology/` — ontology and controlled vocabulary
- `data/traditions/` — interpretive lenses
- `data/cases/` — canonical case records
- `data/generated/` — generated indexes
- `integration/ppw/` — PPW evidence-module boundary
- `src-js/` — validation and generation tooling
- `src-py/` — analytical Python package
- `tests/`, `test-py/` — executable tests
- `site/` — Quarto publication project
- `.agents/`, `AGENTS.md` — Codex workflow instructions

## First pilot

The included pilot is **institutional self-preservation through sacrificial
escalation**:

> When a political institution treats prior deaths as an obligation to continue
> a destructive course, which forms of agency are necessary to explain the
> resulting behavior?

## License

Original project code, schemas, data structures, and documentation are MIT
licensed. Third-party sources retain their original rights.
