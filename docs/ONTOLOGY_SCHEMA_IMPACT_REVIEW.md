# Epic 10 Ontology And Schema Impact Review

## Purpose

This review closes the Epic 10 codebook cycle by checking whether the codebook,
examples, blinded packet template, and initial reliability/adjudication pass
require ontology, controlled-vocabulary, schema, canonical data, or validation
changes.

The result is intentionally conservative: no ontology or schema change is
accepted in this issue. Any future migration remains human-gated and must be
handled through a separate issue with an ADR where required.

## Inputs Reviewed

- `docs/CODEBOOK.md`
- `docs/BLINDED_CODING_PACKET_TEMPLATE.md`
- `docs/reliability/initial-codebook-coding-passes.md`
- `data/ontology/registry.json`
- `data/ontology/controlled-vocabulary.json`
- `schemas/common.schema.json`
- `schemas/attribution-hypothesis.schema.json`
- `schemas/review.schema.json`
- `data/cases/1-kings-22-lying-spirit/*`

## Sufficiency Assessment

### Ontology Classes

Current classes are sufficient for the 1 Kings 22 pilot and Epic 10 codebook
exercise.

- `human-person` covers Ahab and Micaiah.
- `collective-actor` covers Ahab's court prophets where the group is treated
  as a coordinated actor.
- `institution` covers the royal counsel system where the courtly arrangement
  is treated as an analytical institutional actor.
- `psychological-pattern` covers selective reception of counsel.
- `symbolic-order` remains available for later symbolic-power cases, though it
  was not required as a new canonical classification in the pilot.
- `nonhuman-spiritual-agent` covers the lying spirit and YHWH as
  textually/theologically proposed agents while preserving the human review
  gate.
- `material-object` and `ritual-process` remain unused in the pilot but are
  still appropriate for the seed-case set.

No new class is accepted from Epic 10.

### Relations

Current relation labels are sufficient for the pilot's documented argument
shape. The codebook and reliability pass repeatedly use distinctions already
representable by the existing relation set:

- agents acting through media;
- mechanisms manifesting as observed patterns;
- higher-order patterns emerging from components;
- events interpreted by tradition lenses.

No new relation is accepted from Epic 10.

### Agency Criteria

The existing criteria are sufficient for the codebook and initial coding pass:
identity, persistence, directionality, selectivity, responsiveness, mechanism,
medium, counterfactual, necessity, independent evidence, alternatives, and
falsifiability.

The codebook uses more explicit prose labels for some criteria:
`counterfactual dependence` maps to `counterfactual`, and `explanatory
necessity` maps to `necessity`. This does not require an ontology change now,
but future tooling may benefit from explicit aliases.

### Status Vocabularies

The current distinction between attribution status and explanatory necessity is
adequate:

- `compatible-but-unnecessary` belongs to attribution status vocabulary.
- `compatible` belongs to `explanatoryNecessity`.
- `underdetermined`, `category-error`, and `not-currently-testable` remain
  useful as attribution-status outcomes.

No status vocabulary change is accepted from Epic 10.

### Schemas

Current case, hypothesis, finding, moral-evaluation, and review schemas are
sufficient for the current scaffold because Epic 10 did not promote coder
outputs or adjudication prose into canonical data.

The existing `reviews.json` schema is intentionally narrow. It can record a
human or model review decision against a target, but it does not yet model raw
coding passes, comparison matrices, disagreement classifications, or
adjudication outcomes. That limitation is acceptable for Epic 10 because the
initial coding passes remain documented as non-canonical research notes.

## Proposed Changes

No ontology, controlled-vocabulary, schema, canonical case-data, validation, or
generation change is proposed for immediate acceptance in this issue.

One follow-up issue already exists:

- #14: define canonical reliability and adjudication records before moving raw
  coding passes or adjudication outcomes into canonical data.

## Rejected Changes

The following changes are rejected for Epic 10:

- Mapping biblical terms such as spirit, power, ruler, authority, beast, or
  Babylon directly to ontology classes without case-specific interpretive
  argument.
- Adding a specialized `biblical-spiritual-being`, `demonic-agent`, or
  `divine-agent` class from the 1 Kings 22 pilot alone.
- Treating `institution` as always an agent rather than sometimes a medium,
  setting, or analytical construct.
- Treating a medium, mechanism, manifestation, moral evaluation, or
  theological interpretation as an agent without a separate agency claim.
- Turning reliability agreement into a finding-promotion rule.
- Using model coding or reliability scoring to approve a spiritual
  attribution.
- Expanding schemas inside this issue without a prior human-approved ADR.

## Deferred Changes

The following changes are deferred for later issues or epics:

- Canonical storage for reliability coding passes, comparison records,
  disagreement classifications, and adjudication outcomes.
- Optional aliases that make ontology criterion IDs line up with codebook prose
  labels, such as `counterfactual` and `counterfactual-dependence`.
- A fuller review of whether divine agency and other nonhuman spiritual agency
  should remain in one broad class or be distinguished by tradition-specific
  lenses rather than ontology classes.
- Seed-case expansion beyond 1 Kings 22 to test whether Revelation, Daniel,
  Job, Pauline powers, and Gospel exorcism cases require additional ontology
  classes or relations.
- Validation rules that check reliability/adjudication artifacts once those
  artifacts have canonical storage.

## Human-Gate Confirmation

No ontology, codebook-controlled term, schema, or canonical data change is made
by this review. Therefore no ADR is added for Epic 10 impact review itself.

Future ontology or schema changes must remain under human command authority and
must include an ADR before implementation.

## Epistemic Guardrails

- Agent, agency, mechanism, medium, manifestation, and interpretation remain
  distinct.
- Ordinary mechanisms remain live and are not treated as proof that spiritual
  mediation is impossible.
- Moral severity, deception, harm, and narrative intensity are not evidence by
  themselves for nonhuman spiritual agency.
- Spiritual attributions remain proposed unless separately approved by human
  review.
- Model outputs and imported records remain provisional until human promotion.
