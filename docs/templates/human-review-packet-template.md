# Human Review Packet Template

Prepared for: [Issue #ISSUE_NUMBER](ISSUE_URL), "ISSUE_TITLE"

Prepared date: YYYY-MM-DD

Review mode: human review gate

Current packet status: draft

## Decision To Record

Canonical `reviews.json` supports these decision values: `pending`, `accept`,
`accept-with-revision`, `revise`, `reject`, and `abstain`.

Human reviewer:

Decision:

Decision date:

Rationale:

Required changes before any acceptance:

## Gate Boundary

This packet prepares the review gate. It does not approve a finding, approve a
spiritual attribution, publish or export a record, promote model-coded
reliability outputs, or pin a reviewed tag.

If no human decision is supplied, the canonical review remains pending, draft
artifacts remain draft, spiritual-attribution hypotheses remain human-gated, and
provisional reliability/adjudication records remain provisional.

## Reviewer's Plain-Language Task

Summarize the review task in ordinary prose. State what the reviewer is being
asked to decide and what the packet is not claiming.

Primary questions:

- Is the target faithful to the evidence currently represented?
- Does it preserve ordinary, lower-level, and rival explanations?
- Does it keep human-gated claims explicitly gated?
- Are alternatives, assumptions, falsifiers, and uncertainties sufficient?
- Should reliability/adjudication material remain provisional, be revised, or
  support a later human decision?

Possible reviewer outcome:

- Keep the review `pending` if the record is not mature enough.
- Choose `revise` if the framing is promising but records need correction.
- Choose `accept-with-revision` only if the target is acceptable but named
  cleanup must occur before downstream promotion or publication.
- Choose `accept` only if the target is acceptable as reviewed at this boundary.
- Choose `reject` if the target should not be used.
- Choose `abstain` if the reviewer declines to adjudicate.

## Artifacts Under Review

| Artifact | Records | Current status | Review question |
| --- | --- | --- | --- |
| [target-file.json](../../path/to/target-file.json) | `target-record-id` | `reviewStatus: draft` | What decision should be made for this record? |
| [reviews.json](../../path/to/reviews.json) | `pending-review-id` | `decision: pending` | What human decision should replace or preserve the pending review? |

Related canonical records:

- [case.json](../../path/to/case.json)
- [sources.json](../../path/to/sources.json)
- [passages.json](../../path/to/passages.json)
- [observations.json](../../path/to/observations.json)
- [events.json](../../path/to/events.json)
- [argument-graph.json](../../path/to/argument-graph.json)
- [moral-evaluations.json](../../path/to/moral-evaluations.json)

Related methodology and schema documents:

- [METHODOLOGY.md](../METHODOLOGY.md)
- [CODEBOOK.md](../CODEBOOK.md)
- [review.schema.json](../../schemas/review.schema.json)

## Evidence Base

Primary source records:

- `source-id`: plain-language source description, rights/provenance status, and
  remaining source concerns.

Anchor passages or evidence records:

- `passage-or-evidence-id`: plain-language description of what this contributes.

Observations:

- `observation-id`: plain-language observation. Do not add causal language to an
  observation.

## Target Finding Or Artifact Under Review

Plain-language statement:

Current empirical or textual conclusion:

- What the represented evidence supports.
- What remains provisional.

Current theological or interpretive conclusion, if applicable:

- What is textually or canonically arguable.
- What still requires human theological review.

Current uncertainties:

- Unreviewed sources, translations, traditions, or methods.
- Contested interpretive relationships.
- Limits on generalization.

## Hypothesis Review Cards

### Hypothesis Title

Plain claim:

Evidence currently used:

- Evidence item.

Why it matters:

Assumptions to review:

- Assumption.

Possible reasons to revise:

- Falsifier or revision trigger.

Human gate:

- State whether special human approval is required, and why.

Reviewer note:

Decision or concern:

## Alternatives, Assumptions, And Falsifiers

Live alternatives:

- Alternative explanation.

Assumptions requiring review:

- Assumption.

Falsifiers or revision triggers:

- Falsifier or revision trigger.

## Reliability And Adjudication State

Summarize reliability/adjudication records in prose. Model or AI outputs may
inform review, but they do not promote findings, approve spiritual attribution,
publish, export, or create reviewed versions.

Agreements preserved:

- Agreement.

Disagreements preserved:

- Disagreement.

Promotion gate state:

- `promotesFinding: false`
- `approvesSpiritualAttribution: false`
- `approvesPublication: false`
- `createsReviewedTag: false`
- `acceptedHumanReviewIds: []`

## Assessment Separation

Empirical and textual assessment:

- State what can be assessed from textual or empirical evidence.
- Do not claim proof of spiritual agency beyond the bounded evidence.
- Keep ordinary mechanisms and rival explanations live.

Moral evaluation:

- State whether moral evaluation is draft, accepted, or not assessed.
- Do not infer spiritual agency from moral severity.
- Keep causal inference from moral evaluation prohibited unless explicitly
  changed by human-reviewed methodology.

Theological evaluation:

- State what theological question is under review.
- Keep divine agency, creaturely agency, mediation, interpretation, and human
  responsibility distinct.
- Require explicit human decision for spiritual-attribution approval.

## Reviewer Checklist

- [ ] The artifact paths and record IDs are the intended review targets.
- [ ] The evidence base is sufficient for the decision being made.
- [ ] Source rights and provenance are acceptable for this decision boundary.
- [ ] The packet does not promote AI/model output without human approval.
- [ ] Rival explanations remain live.
- [ ] Textual observation is separated from causal attribution.
- [ ] Causal attribution is separated from moral evaluation.
- [ ] Moral evaluation is separated from theological judgment.
- [ ] Any spiritual-attribution approval is explicit and scoped.
- [ ] Any finding promotion is explicit and scoped.
- [ ] Any publication, export, or reviewed tag decision is explicit and scoped.

## Remaining Gates If Left Pending

- Human review decision for the target artifact.
- Human decision on gated spiritual-attribution, theological, reliability,
  source-rights, publication/export, or reviewed-version questions.
- Follow-up evidence, source, tradition, or methodology work needed before a
  later decision.
