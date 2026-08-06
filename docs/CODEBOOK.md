# Agency-Attribution Codebook

## Scope

This codebook defines the core categories used when comparing agency
attribution hypotheses. The definitions are operational: they tell a researcher
or model what to put in each field and what category errors to avoid.

The categories do not decide whether a biblical text's spiritual claim is
approved, literal, analogical, doctrinally settled, or transferable to another
case. They preserve the distinction between textual observation, causal
explanation, theological interpretation, and moral evaluation.

## Core Categories

### Agent

An agent is the proposed actor to which an action, disposition, direction, or
responsibility is attributed in a bounded case. In MAAW, an agent may be a
human person, collective actor, institution, symbolic order, psychological
pattern, emergent pattern, material or ritual mediator, or nonhuman spiritual
agent as defined by the ontology registry.

An agent is not the same thing as an effect, a mechanism, a medium, a moral
evaluation, or a metaphorical label unless the case explicitly argues that the
label identifies an acting subject or subject-like pattern. A biblical term
such as spirit, power, ruler, authority, wisdom, folly, beast, or Babylon does
not automatically map to one ontology class without interpretive argument.

### Agency Claim

An agency claim is the specific assertion that a proposed agent exercises some
capacity in relation to an observed pattern. It states what the agent is alleged
to do, through what level of description, and with what scope.

An agency claim is not a bare observation, a moral verdict, a confidence score,
or an approval of spiritual attribution. It should not smuggle causation into
observation records, and it should not infer nonhuman spiritual agency merely
from severity, deception, harm, or resemblance to another passage.

### Cause

A cause is an explanatory relation in which one factor contributes to,
enables, constrains, occasions, directs, or helps produce an event or pattern.
MAAW treats causal claims as hypotheses to be supported, qualified, compared,
or rejected.

A cause is not identical to moral guilt, theological meaning, narrative
significance, or source wording. Identifying an ordinary cause does not prove
that spiritual mediation is impossible, and identifying a spiritual proposal
does not remove human, institutional, psychological, or textual causes from
consideration.

### Mechanism

A mechanism is the process or pathway by which a proposed agent, structure, or
condition produces or contributes to a manifestation. Mechanisms answer the
question, "How does this attribution become effective?"

A mechanism is not the agent itself, the medium through which it operates, or
the observable outcome. A mechanism may be psychological, institutional,
symbolic, social, ritual, technical, economic, political, or spiritually
proposed, but naming the mechanism class does not settle theological status.

### Medium

A medium is that through which agency or causation is mediated in the case:
for example a body, speech act, office, institution, ritual, symbol, text,
technical system, law, or material object.

A medium is not automatically an agent. A prophetic mouth, court office,
scriptural narrative, institution, or ritual can carry, constrain, or manifest
agency without itself being the acting subject under evaluation. If a medium is
also proposed as an agent, that requires a separate agency claim.

### Manifestation

A manifestation is the observable or textually represented result by which an
attribution hypothesis becomes inspectable. It may be a narrated event,
patterned speech, decision, ritual action, institutional behavior, symbolic
form, or reported experience.

A manifestation is not by itself proof of its proposed cause or agent. Harm,
deception, order, repetition, or intensity may support a hypothesis only when
linked to evidence, mechanism, alternatives, and falsifiers.

### Interpretation

An interpretation is a meaning-making judgment about what an observation,
event, pattern, or attribution signifies within a textual, theological,
historical, literary, social, psychological, or tradition-specific frame.

An interpretation is not the same as the observation being interpreted, and it
is not automatically a causal explanation. A theological interpretation may
state coherence, doctrinal tension, canonical relevance, or moral significance
while still leaving empirical discrimination or causal attribution
underdetermined.

## Separation Rules

- Put textual descriptions in passages and observations before making
  attribution claims.
- Put causal claims in events, mechanisms, and attribution hypotheses, not in
  observation records.
- Put theological coherence, canonical argument, and doctrinal tension in
  theological status, tradition lenses, findings, or reviews.
- Put moral evaluation in moral-evaluation records and keep
  `causalInferenceProhibited` true.
- Require human review for any hypothesis involving a nonhuman spiritual agent.
- Keep lower-level explanations live unless they are explicitly rejected by
  evidence or argument; do not delete alternatives merely because another
  hypothesis has more support.

## Agency-Criteria Coding Rules

Use these rules when moving from observations to attribution hypotheses. A
coder may mark a criterion as satisfied, partially satisfied, contradicted, not
applicable, or underdetermined in notes or review prose, but repository status
fields remain limited to the controlled vocabulary already defined in schemas
and canonical records.

Observation coding records what the source says or depicts without adding
causal or spiritual attribution. Attribution coding evaluates whether a
proposed agent, agency claim, cause, mechanism, medium, manifestation, and
interpretation are supported by the observation set and rival explanations.

### Identity

Coding question: What exactly is alleged to be acting, and how is it
distinguished from members, instruments, effects, and interpretive labels?

Admissible evidence: named actors, recurring roles, explicit narrative agents,
stable institutional offices, defined symbolic patterns, tradition-specified
spiritual agents, or case-specific criteria that distinguish the proposed agent
from nearby mechanisms and media.

Common failure modes: treating a metaphor as an agent without argument,
collapsing a group into one member, treating a medium as the actor, or mapping
a biblical term directly to an ontology class without interpretive warrant.

### Persistence

Coding question: How does the alleged agent remain identifiable across time,
textual scenes, changing participants, or repeated manifestations?

Admissible evidence: narrative continuity, named recurrence, office continuity,
ritual repetition, tradition-defined identity, documented institutional
persistence, or stable criteria for tracking an emergent pattern.

Common failure modes: assuming persistence from one isolated occurrence,
confusing repeated effects with the same agent, or treating continuity as
proved when only analogy has been shown.

### Directionality

Coding question: Does the pattern move toward an identifiable end, pressure,
or orientation that can be compared with rival explanations?

Admissible evidence: repeated movement toward a result, narrated intention,
selective pressure, institutional incentives, theological claims about purpose,
or textual framing that identifies an end.

Common failure modes: inferring direction from harm alone, treating any
outcome as intended, or confusing moral interpretation with causal direction.

### Selectivity

Coding question: Does the proposed agent or pattern select among alternatives,
or does it merely produce regular effects without discernible selection?

Admissible evidence: rejected alternatives, preferential response to favorable
conditions, discriminating speech or action, adaptive filtering of counsel, or
documented selection by offices, actors, or systems.

Common failure modes: coding ordinary regularity as choice, ignoring available
alternatives, or treating a narrator's evaluation as evidence that the proposed
agent selected among options.

### Responsiveness

Coding question: Does the proposed agent or pattern respond to resistance,
correction, changed conditions, or new information?

Admissible evidence: adaptation after opposition, changed tactics, altered
speech, institutional adjustment, repeated resistance to correction, or textual
markers that the proposed actor responds to another actor.

Common failure modes: projecting responsiveness onto a static pattern,
mistaking escalation for adaptation without evidence, or requiring
responsiveness for every nonhuman spiritual claim when the bounded text does
not supply it.

### Counterfactual Dependence

Coding question: Would the event or manifestation probably have occurred in
the same way without the proposed agent, mechanism, or medium?

Admissible evidence: explicit alternatives in the text, comparative cases,
process evidence, dependence on a specific medium, lower-level explanations
that can or cannot account for the same manifestation, or stated falsifiers.

Common failure modes: demanding impossible proof, treating counterfactuals as
probabilities of spiritual agency, or assuming that sufficient ordinary
mechanisms exclude spiritual mediation.

### Explanatory Necessity

Coding question: Is the attribution necessary, contributory, compatible,
unnecessary, or unknown for explaining the bounded pattern?

Admissible evidence: evidence that lower-level explanations fail to account for
the pattern, evidence that the proposed agent explains a distinct feature, or
evidence that the attribution is coherent but adds no discriminating
explanatory work.

Common failure modes: labeling a spiritually proposed agent necessary before
assessing lower-level explanations, treating coherence as necessity, or
treating underdetermination as failure rather than a valid result.

### Independent Evidence

Coding question: Is there evidence for the proposed agent or agency claim apart
from the outcome it is used to explain?

Admissible evidence: separate textual claims, independent witnesses,
tradition-specific arguments, prior or later narrative identity markers,
institutional records, or observations that do not merely restate the
manifestation.

Common failure modes: using the same harmful outcome as both claim and proof,
counting moral severity as independent evidence, or approving a spiritual
attribution with no independent evidence and no qualifying status.

### Alternatives

Coding question: Which rival or less ontologically demanding explanations have
been assessed, and what does each explain or fail to explain?

Admissible evidence: explicit alternative hypotheses, lower-level assessments,
counterevidence, comparative readings, psychological mechanisms, textual or
literary explanations, institutional processes, and tradition-specific
objections.

Common failure modes: deleting live alternatives because one hypothesis seems
stronger, treating lower-level explanations as hostile to theology, or invoking
a less observable agent before ordinary textual, human, psychological, social,
and institutional explanations have been assessed.

### Falsifiability

Coding question: What evidence, argument, or interpretive result would
materially weaken, qualify, or overturn the attribution?

Admissible evidence: stated falsifiers, counter-readings, missing identity or
mechanism evidence, conflicting textual data, failed comparative tests,
tradition-specific objections, or evidence that the attribution commits a
category error.

Common failure modes: writing unfalsifiable claims, treating theological
importance as immunity from critique, or using vague falsifiers that could not
change the status of the hypothesis.

## Outcome Coding

Use `underdetermined` when the evidence does not discriminate between live
alternatives or when a proposed attribution lacks enough support for a stronger
status. Underdetermination is a valid finding, not a failed analysis.

Use `compatible-but-unnecessary` when an attribution is coherent within a
tradition or reading but adds no necessary explanatory work beyond better
supported alternatives.

Use `category-error` when a claim collapses categories in a way that invalidates
the attribution, such as treating a manifestation as an agent, treating a moral
evaluation as causal evidence, or treating a medium as an actor without a
separate agency claim.

For less observable agents, including nonhuman spiritual agents, code
lower-level explanations first. Spiritual-attribution hypotheses must remain
proposed, must assess lower-level explanations, must identify mechanisms and
media, and must require human review before approval, promotion, export, or
publication.
