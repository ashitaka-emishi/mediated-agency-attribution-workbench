# Reliability And Adjudication Storage Decision

## Purpose

Issue #14 decides where MAAW should store reliability coding passes,
comparison records, and adjudication outcomes. The initial model coding passes
in `docs/reliability/initial-codebook-coding-passes.md` are useful research
artifacts, but they are not canonical findings, accepted human reviews, or
spiritual-attribution approvals.

This decision packet prepares the human-gated storage decision. It does not by
itself migrate data, approve model outputs, promote findings, or approve
spiritual attributions.

Human decision: approved Option C on 2026-08-06. Issue #14 implements the
canonical `reliability.json` storage boundary, schema, ADR, and initial
provisional 1 Kings 22 migration.

## Current Boundary

`data/cases/*/reviews.json` currently stores review decisions against target
records. It is intentionally narrow: reviewer identity/type, decision,
rationale, date, and epistemic concerns.

Reliability and adjudication artifacts need to preserve a wider workflow:

- source packet metadata;
- coder identity/type and run dates;
- raw or summarized coder outputs;
- fields shown and withheld from coders;
- comparison records;
- disagreement classifications;
- adjudication outcomes;
- provisional status;
- links to later accepted human review;
- explicit non-promotion guards.

Conflating those records with `reviews.json` would blur the distinction between
evidence-producing reliability work and a human review decision.

## Options Considered

### Option A: Expand `reviews.json`

Store reliability passes, comparison records, adjudication outcomes, and human
review decisions in one existing file.

Benefits:

- fewer per-case files;
- existing loader already reads `reviews.json`;
- accepted human review stays near reliability records.

Rejected because:

- raw/model coding output is not the same artifact as a review decision;
- `reviews.json` would need unrelated optional fields and record variants;
- it would be easier to accidentally treat reliability agreement as acceptance;
- spiritual-attribution and finding-promotion gates would become less visible.

### Option B: Keep Reliability Documentation-Only

Leave `docs/reliability/*` as the only home for coding passes and
adjudication notes.

Benefits:

- no schema or canonical-data migration now;
- low implementation cost;
- useful while the pilot remains exploratory.

Rejected as the long-term boundary because:

- traceability from case records to reliability/adjudication artifacts remains
  weak;
- validation cannot check provisional status or promotion guards;
- later publication or review workflows would need to rediscover prose files;
- coding passes cannot be compared consistently across cases.

### Option C: Add `reliability.json` Per Case

Add a new canonical per-case file, `reliability.json`, with a dedicated schema.
Keep `reviews.json` for accepted review decisions.

Recommended because:

- raw coder output, comparison, adjudication, and human review remain distinct;
- model-generated coding output can be canonical but explicitly provisional;
- validation can enforce non-promotion guards;
- future cases can use a repeatable structure without overloading reviews;
- accepted human reviews can still reference reliability records by ID.

## Approved Decision

Adopt Option C.

Add `data/cases/<case-id>/reliability.json` as the canonical home for
reliability and adjudication workflow records. Keep `reviews.json` as the
canonical home for human/model/script review decisions about target artifacts.

## Proposed Record Boundary

A `reliability.json` record should distinguish these layers:

- `run`: metadata for a coding exercise or reliability round;
- `sourcePacket`: packet version, blinding level, evidence shown, and fields
  withheld;
- `coderOutputs`: individual coder/model pass summaries, including coder type,
  run date, uncertainty, alternatives, assumptions, falsifiers, and whether
  human review is required;
- `comparison`: agreements, disagreements, and disagreement classifications;
- `adjudication`: provisional adjudication outcomes, preserved rival
  explanations, underdetermination, and follow-up issues;
- `promotionGate`: explicit confirmation that no model output, reliability
  agreement, spiritual attribution, or finding is approved by the record.

## Required Guardrails

- Model-generated coding output remains provisional unless a later accepted
  human review references and promotes it.
- Spiritual-attribution approval remains human-gated.
- Finding promotion remains human-gated.
- Reliability agreement must not be treated as accepted human review.
- Rejected and deferred alternatives remain traceable.
- Schema changes must be backed by an ADR.
- Generated derivatives must be regenerated from canonical data only after the
  canonical migration is approved and implemented.

## Human Decision

The recommended storage boundary is approved:

- create an ADR;
- add `schemas/reliability.schema.json`;
- teach the loader/validator about `reliability.json`;
- migrate the initial 1 Kings 22 reliability pass into canonical provisional
  data.

## Initial Migration

The existing `docs/reliability/initial-codebook-coding-passes.md` becomes the
first canonical reliability record for `1-kings-22-lying-spirit`, with:

- `createdBy: "ai"`;
- `reviewStatus: "draft"` or `argument-review`;
- coder outputs marked `model`;
- adjudication outcomes marked provisional;
- follow-up #14 recorded as the origin of the migration;
- no accepted human review ID;
- no finding promotion;
- no spiritual-attribution approval;
- no publication or export.

The prose documentation remains as the human-readable narrative companion, but
canonical workflows should read the structured `reliability.json` record.
