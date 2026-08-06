# Codex and Agent Instructions

## Mission

Work on MAAW as an epistemic research system, not an oracle. Preserve
traceability, rival explanations, uncertainty, human review gates, and the
separation between causal attribution and moral/theological judgment.

## Required workflow

1. Read `PROBLEM_STATEMENT.md`, `PROJECT_CHARTER.md`, and `maaw.project.json`.
2. Use `.agents/skills/sdlc-workflow/SKILL.md` for issue-directed work.
3. Inspect relevant schemas and canonical records before modifying code.
4. Modify canonical data, never generated derivatives.
5. Run validation, JavaScript tests, Python tests, and generation.
6. Report schema impact, migration impact, tests, and unresolved epistemic risks.

Treat `sdlc`, `sldc`, and `$sdlc-workflow` as workflow invocations.

## Non-negotiable constraints

- Never infer a spiritual agent solely from moral severity.
- Never use an ordinary mechanism as proof that spiritual mediation is impossible.
- Never collapse agent, agency, mechanism, medium, manifestation, and interpretation.
- Never add causal language to an observation record.
- Never approve a spiritual attribution; prepare it for human review.
- Never turn confidence into a probability of demonic agency.
- Never delete a live alternative merely because another has more support.
- Keep theological coherence and empirical discrimination separate.
- Do not silently promote imported or AI-generated findings.

## Data conventions

- Stable IDs use lowercase kebab-case.
- Dates use ISO 8601.
- Canonical records live under `data/cases`, `data/ontology`, and `data/traditions`.
- Generated records live under `data/generated` and `site/generated`.
- Schema changes require an ADR under `docs/decisions/`.

## Commit attribution

When Codex materially performs commit work, include:

`Co-authored-by: OpenAI Codex <codex@openai.com>`

This repository uses `master` as its default branch.
