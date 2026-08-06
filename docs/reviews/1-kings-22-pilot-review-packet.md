# 1 Kings 22 Pilot Review Packet

Prepared for: [Issue #20](https://github.com/ashitaka-emishi/mediated-agency-attribution-workbench/issues/20),
"Review 1 Kings 22 pilot findings and reliability record"

Prepared date: 2026-08-06

Review mode: human review gate

Current packet status: in progress

## Decision To Record

Canonical `reviews.json` supports these decision values: `pending`, `accept`,
`accept-with-revision`, `revise`, `reject`, and `abstain`.

Human reviewer: Andrew Hammer

Decision:

Decision date: August 6, 2026

Rationale:

Required changes before any acceptance:

## Gate Boundary

This packet prepares the review gate. It does not approve a finding, approve a
spiritual attribution, publish or export a record, promote model-coded
reliability outputs, or pin a reviewed tag.

If no human decision is supplied, the canonical review remains
`review-biblical-pilot-pending` with decision `pending`, the finding remains
`draft`, spiritual-attribution hypotheses remain human-gated, and reliability
adjudication remains provisional.

## Reviewer's Plain-Language Task

You are reviewing whether the pilot's current 1 Kings 22 records are clear,
bounded, and theologically disciplined enough to keep, revise, or reject. The
core proposal is not "the project has proven spiritual agency." The proposal is
that this biblical passage can be modeled as a layered agency case without
collapsing Ahab, the court prophets, prophetic speech, the lying spirit, and
YHWH's judgment into one undifferentiated cause.

Primary questions:

- Is the draft finding faithful to the textual evidence currently represented?
- Does it preserve ordinary human and institutional explanations rather than
  jumping to spiritual attribution?
- Does it keep the proposed spiritual and divine agency claims explicitly
  human-gated?
- Are the live alternatives, assumptions, and falsifiers sufficient for this
  pilot stage?
- Should the reliability record remain provisional, or does it need revision
  before it can support review?

Possible reviewer outcome:

- Keep the review `pending` if source, tradition, or theological review is not
  mature enough.
- Choose `revise` if the framing is promising but the records need correction.
- Choose `accept-with-revision` only if the finding is acceptable but named
  cleanup must occur before any promotion.
- Choose `accept` only if the target is acceptable as reviewed at this boundary.
- Choose `reject` if the target should not be used.
- Choose `abstain` if you decline to adjudicate.

## Artifacts Under Review

| Artifact | Records | Current status | Review question |
| --- | --- | --- | --- |
| [findings.json](../../data/cases/1-kings-22-lying-spirit/findings.json) | `finding-biblical-pilot-attribution` | `reviewStatus: draft`, `publicationStatus: private-note` | Should the draft finding be accepted, revised, rejected, or left pending? |
| [hypotheses.json](../../data/cases/1-kings-22-lying-spirit/hypotheses.json) | Five attribution hypotheses | all `reviewStatus: draft` | Which layers are acceptable as hypotheses, and which require revision? |
| [reviews.json](../../data/cases/1-kings-22-lying-spirit/reviews.json) | `review-biblical-pilot-pending` | `decision: pending` | What human decision should replace or preserve the pending review? |
| [reliability.json](../../data/cases/1-kings-22-lying-spirit/reliability.json) | `rel-initial-codebook-coding-passes` | `reviewStatus: argument-review`, adjudication `provisional` | Does the reliability/adjudication record accurately support later review without promoting model output? |
| [initial-codebook-coding-passes.md](../reliability/initial-codebook-coding-passes.md) | Companion reliability note | non-canonical explanatory doc | Does the narrative reliability summary match the canonical record and preserve review limits? |

Related canonical case records:

- [case.json](../../data/cases/1-kings-22-lying-spirit/case.json)
- [sources.json](../../data/cases/1-kings-22-lying-spirit/sources.json)
- [passages.json](../../data/cases/1-kings-22-lying-spirit/passages.json)
- [observations.json](../../data/cases/1-kings-22-lying-spirit/observations.json)
- [events.json](../../data/cases/1-kings-22-lying-spirit/events.json)
- [argument-graph.json](../../data/cases/1-kings-22-lying-spirit/argument-graph.json)
- [moral-evaluations.json](../../data/cases/1-kings-22-lying-spirit/moral-evaluations.json)

Related methodology and schema documents:

- [METHODOLOGY.md](../METHODOLOGY.md)
- [CODEBOOK.md](../CODEBOOK.md)
- [BLINDED_CODING_PACKET_TEMPLATE.md](../BLINDED_CODING_PACKET_TEMPLATE.md)
- [review.schema.json](../../schemas/review.schema.json)
- [finding.schema.json](../../schemas/finding.schema.json)
- [attribution-hypothesis.schema.json](../../schemas/attribution-hypothesis.schema.json)
- [reliability.schema.json](../../schemas/reliability.schema.json)

## Evidence Base

Primary source record:

- `src-kjv-1-kings-22`: public-domain KJV scaffold excerpts, with partial
  provenance. Later source and textual-witness review is still required.

Project framing source:

- `src-methodological-pilot-note`: project-authored scope note, open provenance,
  used to preserve the pilot's methodological restraints.

Pilot anchor passages:

- `pass-council-question`: 1 Kings 22:19-20, heavenly council scene.
- `pass-spirit-proposal`: 1 Kings 22:21-22, proposed mediation through prophetic
  mouths.
- `pass-ahab-preference`: 1 Kings 22:8, Ahab's preference against adverse
  prophecy.
- `pass-pilot-scope`: project scope statement against overgeneralizing from
  severity, deception, or royal failure.

Observations:

- `obs-council-scene`: records the narrative presentation of YHWH enthroned with
  the host of heaven present.
- `obs-spirit-speech-medium`: records the text's reported proposal by the spirit;
  it does not generalize a rule of spiritual attribution.
- `obs-ahab-selective-reception`: records Ahab's stated contrast between
  favorable and adverse prophecy.
- `obs-pilot-restraint`: records the pilot boundary between textual claims,
  theological interpretation, human decision, and proposed spiritual mediation.

## Finding Under Review

`finding-biblical-pilot-attribution` currently states that the 1 Kings 22 pilot
supports a layered reading in which human desire, courtly prophetic mediation,
the lying spirit's proposed agency, and divine judicial agency must be
distinguished rather than collapsed.

Current empirical conclusion:

- The textual record supports observations about Ahab's preference, Micaiah's
  council vision, and the reported spirit's speech-mediated role.
- Historical reconstruction, source-critical analysis, and comparative
  tradition work remain provisional.

Current theological conclusion:

- Spiritual agency is textually proposed and canonically arguable in the
  passage.
- Approval, generalization, and doctrinal synthesis require human theological
  review.

Current uncertainties:

- Translation and textual witnesses have not been fully reviewed.
- Major Jewish and Christian interpretive traditions have not been compared.
- The relation between divine permission, spirit agency, prophetic speech, and
  human responsibility remains contested.
- This pilot does not establish criteria for transferring the attribution
  pattern to modern cases.

## Attribution Hypotheses

| Hypothesis | Layer | Current assessment | Human gate |
| --- | --- | --- | --- |
| `hyp-ahab-selective-agency` | Human agency | `plausible`; necessary lower-level explanation; partially discriminated | No spiritual-attribution approval gate; still draft |
| `hyp-court-prophetic-system` | Institutional/court system | `proposed`; contributory; underdetermined | No spiritual-attribution approval gate; still draft |
| `hyp-prophetic-symbolic-mediation` | Prophetic/symbolic mediation | `plausible`; contributory; tradition-coherent | No spiritual-attribution approval gate; still draft |
| `hyp-lying-spirit-mediation` | Proposed spiritual mediation | `plausible`; compatible; not empirically testable; canonically argued | Human review required before approval or generalization |
| `hyp-divine-judicial-agency` | Proposed divine judicial agency | `plausible`; compatible; not empirically testable; canonically argued | Human review required before approval or doctrinal use |

### Hypothesis Review Cards

#### Ahab's Selective Human Agency

Plain claim:

Ahab is not a passive victim of the episode. The text presents him as preferring
favorable counsel and resisting adverse prophecy.

Evidence currently used:

- Ahab says he hates Micaiah because Micaiah does not prophesy good concerning
  him.
- The case event records Ahab seeking counsel before the royal decision.

Why it matters:

This is the lower-level human agency layer. It helps keep the review from
treating spiritual mediation as a substitute for human responsibility.

Assumption to review:

- Ahab's stated preference is interpretively significant, not incidental.

Possible reason to revise:

- A stronger reading shows Ahab's preference does not bear the weight currently
  placed on it.

Reviewer note:

Decision or concern:

#### Royal Court Consultation System

Plain claim:

The royal court and court prophets shape the decision environment by organizing
prophetic counsel around the king's desire and public deliberation.

Evidence currently used:

- Prophetic messages occur in a royal setting before a military decision.
- Ahab's selective reception occurs inside that counsel setting.

Why it matters:

This preserves an institutional or social layer without deciding too quickly
whether the court itself is an agent or mainly a medium.

Assumption to review:

- The court setting is interpretively relevant, not merely the location of the
  scene.

Possible reason to revise:

- The current record may overstate institutional agency if the court is better
  coded only as a medium.

Reviewer note:

Decision or concern:

#### Prophetic Symbolic Mediation

Plain claim:

Competing prophetic speech mediates the meaning of Ahab's decision by staging
favorable authorization and adverse warning.

Evidence currently used:

- Micaiah reports the council vision.
- The spirit's proposed deception is mediated through prophetic mouths.
- Ahab distinguishes favorable from adverse prophecy.

Why it matters:

This layer distinguishes prophetic speech as a medium of interpretation and
agency. It keeps the case from reducing everything either to Ahab alone or to
the spiritual hypothesis alone.

Assumption to review:

- Prophetic speech functions as more than background information.

Possible reason to revise:

- A stronger reading may show the narrative is not interested in prophetic
  mediation as a distinct analytical layer.

Reviewer note:

Decision or concern:

#### Lying Spirit Mediated Through Prophets

Plain claim:

Within Micaiah's reported vision, the text proposes a nonhuman spiritual agent
whose deceptive role is mediated through prophetic speech.

Evidence currently used:

- The reported spirit proposes to be a lying spirit in the mouth of Ahab's
  prophets.
- The council scene provides the narrative setting for that proposal.

Why it matters:

This is a spiritual-attribution hypothesis. It can be preserved as a proposed,
bounded, textually grounded hypothesis, but it cannot be approved or generalized
without an explicit human decision.

Assumptions to review:

- The council vision is relevant to agency attribution within the narrative.
- A narrated spirit can be considered a proposed nonhuman spiritual agent within
  a defined biblical-theological frame.

Possible reasons to revise:

- A literary or theological reading treats the spirit as non-attributive imagery
  only.
- The hypothesis is being used outside the bounded textual case without warrant.

Reviewer note:

Decision or concern:

#### Divine Judicial Agency In The Council Scene

Plain claim:

The narrative presents YHWH's judicial agency as governing the council scene,
while that divine agency remains distinguishable from the spirit's proposed
mediation and Ahab's responsibility.

Evidence currently used:

- Micaiah reports YHWH enthroned with the host of heaven present.
- The proposed deception is framed inside the council scene.

Why it matters:

This is a theological agency hypothesis. It must preserve the distinction
between divine permission or judgment, creaturely mediation, prophetic speech,
and human responsibility.

Assumptions to review:

- The depiction of YHWH in the council scene is germane to theological agency
  attribution.
- Divine permission and creaturely agency should not be collapsed.

Possible reasons to revise:

- A reading treats the council scene as non-attributive imagery only.
- A reading collapses divine agency into the spirit's agency or removes Ahab's
  responsibility.

Reviewer note:

Decision or concern:

## Alternatives, Assumptions, And Falsifiers

Live alternatives:

- Ahab's selective agency may be the necessary lower-level explanation without
  settling the weight of spiritual mediation.
- The royal counsel system may function as an institutional context, medium, or
  both; the current packet does not fully discriminate this.
- Prophetic symbolic mediation may be foregrounded more strongly than the
  current finding states.
- The lying spirit hypothesis is textually proposed but remains dependent on
  human theological review for approval.
- Divine judicial agency is distinguishable from creaturely mediation, but the
  exact theological relation among permission, judgment, and agency remains
  under review.

Assumptions requiring review:

- Ahab's stated preference is interpretively meaningful for agency attribution.
- The court setting is relevant rather than merely narrative background.
- Micaiah's prophetic speech should be treated as a distinct mediating layer.
- The heavenly council scene may be treated as a textual-theological datum while
  keeping ontology and doctrinal synthesis human-gated.

Falsifiers or revision triggers:

- A stronger reading shows Ahab's stated preference is incidental to the
  attribution question.
- A stronger reading shows the court-prophetic system has no interpretive role.
- A stronger literary or theological reading shows the narrative does not
  distinguish prophetic mediation as a separate layer.
- Source, textual-witness, or tradition review materially changes the pilot's
  evidentiary base.
- The packet is found to infer spiritual agency from moral severity, ordinary
  causal failure, or reliability agreement rather than from the textual claim
  under review.

## Reliability And Adjudication State

`rel-initial-codebook-coding-passes` records two model coding passes over a
hypothesis-redacted packet. Both outputs remain draft model artifacts, and the
overall adjudication is provisional.

Agreements preserved:

- Ahab's human agency remains a lower-level explanation.
- Spiritual proposals require human review.
- Rival explanations remain live.
- Reliability coding does not promote findings.

Disagreements preserved:

- Whether the royal counsel system should be coded as agent, medium, or both.
- How strongly prophetic symbolic mediation should be foregrounded.
- Whether divine judicial agency should be separately coded.
- Whether "compatible but unnecessary" language fits the spiritual hypothesis.
- Whether selective reception extends from Micaiah to the court prophets.

Promotion gate state:

- `promotesFinding: false`
- `approvesSpiritualAttribution: false`
- `approvesPublication: false`
- `createsReviewedTag: false`
- `acceptedHumanReviewIds: []`

## Assessment Separation

Empirical and textual assessment:

- The packet may assess what the canonical records currently support as textual
  observations and structured hypotheses.
- It should not claim empirical proof of spiritual agency beyond the narrative's
  reported proposal.
- Ordinary and lower-level mechanisms remain live and cannot be used either to
  prove or exclude spiritual mediation.

Moral evaluation:

- The moral-evaluation record is still draft and says "Not yet assessed."
- Moral severity, deception, or failure must not be used as evidence for a
  specific spiritual agent.
- Causal inference from moral evaluation remains prohibited.

Theological evaluation:

- The packet may ask whether the layered reading is canonically and
  tradition-aware enough to accept, revise, or reject.
- It must not collapse divine agency, creaturely agency, prophetic mediation,
  human responsibility, and interpretation into one causal claim.
- Any approval of `hyp-lying-spirit-mediation` or
  `hyp-divine-judicial-agency` requires explicit human decision.

## Possible Human Decisions

Use one of these canonical review decisions when updating `reviews.json`:

- `accept`: accept the target as reviewed without required changes.
- `accept-with-revision`: accept the target, but require named revisions before
  any downstream promotion or publication.
- `revise`: do not accept yet; return the target for revision.
- `reject`: reject the target while keeping the rejected rationale traceable.
- `abstain`: record that the reviewer declines to adjudicate.
- `pending`: preserve the current open review state.

If the human intent is "defer," record `pending` canonically and include a
rationale explaining what must happen before later decision.

## Reviewer Checklist

- [ ] The artifact paths and record IDs above are the intended review targets.
- [ ] The evidence base is sufficient for the decision being made.
- [ ] Source rights and provenance are acceptable for the decision boundary.
- [ ] The finding does not promote AI/model output without human approval.
- [ ] The finding keeps rival explanations live.
- [ ] The finding separates textual observation from causal attribution.
- [ ] The finding separates causal attribution from moral evaluation.
- [ ] The finding separates moral evaluation from theological judgment.
- [ ] Any spiritual-attribution approval is explicit and scoped.
- [ ] Any finding promotion is explicit and scoped.
- [ ] Any publication, export, or reviewed tag decision is explicit and scoped.

## Remaining Gates If Left Pending

- Human review decision for `finding-biblical-pilot-attribution`.
- Human decision on whether either spiritual-attribution hypothesis may be
  approved, revised, rejected, or left pending.
- Human theological review of divine permission, spirit agency, prophetic
  mediation, and human responsibility in the passage.
- Source and textual-witness review beyond the KJV scaffold excerpts.
- Tradition comparison across relevant Jewish and Christian interpretations.
- Separate promotion, publication/export, or reviewed-version issue if any
  accepted state should later be pinned or distributed.
