# ADR 0005: Canonical Reliability And Adjudication Records

- Status: Accepted
- Date: 2026-08-06

MAAW stores reliability coding passes, comparison records, and provisional
adjudication outcomes in per-case `reliability.json` files with a dedicated
schema.

`reviews.json` remains the place for review decisions against target records.
Reliability records may include model or human coding outputs, disagreement
classification, adjudication preparation, and links to later accepted human
reviews, but reliability agreement does not itself approve findings, spiritual
attributions, publication, export, or reviewed tags.

Any reliability record created by AI, imported material, or model coding must
remain provisional until accepted human review explicitly promotes it.
