# System Architecture

MAAW uses a reproducible research-workbench architecture:

- one canonical knowledge base;
- human-edited JSON research objects;
- JSON Schema contracts;
- Node.js validation and deterministic generation;
- Python analytical helpers;
- Quarto publication;
- explicit review, adjudication, and promotion states;
- GitHub issues and pull requests as the active work queue.

## Bounded contexts

**Evidence:** sources, passages, provenance, rights, and observations.

**Case:** actors, events, mechanisms, media, and manifestations.

**Attribution:** rival hypotheses, assumptions, alternatives, counterevidence,
falsifiers, necessity, empirical status, and theological status.

**Argumentation:** support, contradiction, qualification, defeat, and alternatives.

**Discernment:** moral and theological evaluation, separated from textual and
causal inference.

**Governance:** human review, model review, adjudication, promotion, export,
and publication.

AI-generated content enters as `createdBy: ai` and `reviewStatus: draft`. It
cannot cross spiritual-attribution, promotion, export, or publication gates
without recorded human review.

Reliability coding passes and provisional adjudication outcomes live in
per-case `reliability.json` records. Review decisions live separately in
`reviews.json`; reliability agreement does not itself approve findings,
spiritual attributions, publication, export, or reviewed tags.
