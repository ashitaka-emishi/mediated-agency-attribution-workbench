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

## Examples From The 1 Kings 22 Pilot

These examples illustrate how to use the categories and criteria. They do not
add canonical case data and do not approve any spiritual attribution.

### Core-Category Examples

Positive agent example: `actor-ahab` is coded as a human-person agent because
the narrative names Ahab and represents him as speaking, preferring, receiving
counsel, and making a royal decision.

Negative agent example: `med-prophetic-mouths` is not coded as an agent merely
because the text names the "mouth" as the medium of speech. The mouth is a
medium unless a separate agency claim identifies the speaker or another acting
subject.

Category-error agent example: "Deception acted in the story" collapses a
manifestation or mechanism into an agent. The coder should instead ask whether
the proposed agent is Ahab, the court prophets, the lying spirit, YHWH, a
symbolic pattern, or another defined actor.

Positive agency-claim example: `hyp-ahab-selective-agency` claims that Ahab
exercises responsible human agency by preferring favorable counsel and
resisting adverse prophecy. This is an attribution hypothesis, not an
observation.

Negative agency-claim example: "The passage says Ahab dislikes Micaiah's
prophecy" is a textual observation. It becomes an agency claim only when a
hypothesis states what Ahab does with that preference.

Category-error agency-claim example: "Ahab's desire proves the lying spirit
controlled him" skips over mechanism, alternatives, evidence, and human review.

Positive cause example: a hypothesis may propose that selective reception of
counsel contributes to Ahab's decision environment. The causal relation belongs
in events, mechanisms, and hypotheses, not in the observation text.

Negative cause example: an observation that records a council scene does not by
itself establish what caused the later royal action.

Category-error cause example: "The episode is morally severe, therefore a
nonhuman spiritual agent caused it" treats moral severity as causal evidence.
MAAW explicitly prohibits that inference.

Positive mechanism example: `mech-prophetic-mediation` is a mechanism because
it describes how speech presented as prophecy mediates warning,
authorization, or deception.

Negative mechanism example: `actor-lying-spirit` is not a mechanism. If the
spirit is proposed as acting, the mechanism still needs to explain how the
agency is mediated.

Category-error mechanism example: "YHWH is the mechanism" collapses agent and
mechanism. A valid hypothesis must distinguish the proposed divine agent from
the proposed process, such as judicial permission or prophetic mediation.

Positive medium example: `med-micaiah-vision-report` is a medium because the
vision report is the textual-prophetic vehicle through which the council scene
is disclosed.

Negative medium example: Ahab's selective reception is not a medium; it is a
psychological mechanism or agency-relevant pattern.

Category-error medium example: "The royal court caused the deception because it
is the medium" confuses a setting or medium with a causal explanation.

Positive manifestation example: "deception is linked to a spirit's proposed
role in the mouths of prophets" is a manifestation in
`hyp-lying-spirit-mediation` because it states the inspectable result the
hypothesis is trying to explain.

Negative manifestation example: "the lying spirit" is not a manifestation; it
is the proposed agent in a spiritual-attribution hypothesis.

Category-error manifestation example: "The manifestation proves its own agent"
uses the outcome as self-authenticating evidence. A manifestation must be
linked to evidence, alternatives, mechanisms, and falsifiers.

Positive interpretation example: a finding may state that the episode is
canonically arguable as layered agency involving divine judgment, creaturely
mediation, prophetic speech, and human responsibility.

Negative interpretation example: a passage excerpt is not an interpretation
until a reader explains its meaning within a textual, theological, historical,
or analytical frame.

Category-error interpretation example: "Because this reading is theologically
coherent, the spiritual hypothesis is empirically discriminated" collapses
theological interpretation into empirical discrimination.

### Agency-Criteria Examples

Positive identity example: `actor-lying-spirit` has bounded identity because
the narrative identifies a spirit making a specific proposal in the council
scene.

Negative identity example: "the spirit behind every later deceptive institution"
is not identified by the 1 Kings 22 pilot. That would require a separate case
and independent argument.

Category-error identity example: mapping "spirit" directly to a universal
demonological class without interpretive argument bypasses the ontology and
tradition-lens review.

Positive persistence example: Ahab's identity persists across the counsel
scene because the narrative names him and tracks his speech and royal role.

Negative persistence example: the lying spirit's identity is bounded to the
reported vision unless additional textual or tradition evidence is added.

Category-error persistence example: repeated deception in unrelated cases does
not prove the same spiritual agent persists across those cases.

Positive directionality example: Ahab's selective reception can be coded as
moving toward favorable counsel if the observation set shows adverse counsel is
resisted and favorable counsel is preferred.

Negative directionality example: the presence of adverse consequences does not
by itself show that a proposed agent aimed at those consequences.

Category-error directionality example: treating harm as proof of demonic
direction collapses moral evaluation into agency attribution.

Positive selectivity example: Ahab's statement that Micaiah does not prophesy
good concerning him supports coding selectivity in reception of counsel.

Negative selectivity example: a repeated pattern of speech is not selective
unless alternatives and differential response are identified.

Category-error selectivity example: coding any repeated institutional habit as
choice without evidence turns regularity into agency by assertion.

Positive responsiveness example: a later coding pass could mark responsiveness
if an actor changes speech or strategy after resistance or correction appears
in the evidence.

Negative responsiveness example: the current pilot should not assume the lying
spirit adapts beyond the bounded council scene unless the text or tradition
argument supplies that evidence.

Category-error responsiveness example: requiring adaptive behavior as a
condition for every spiritual attribution would overrule the bounded text
rather than code it.

Positive counterfactual-dependence example: a coder may ask whether the
reported deception would be explained by Ahab's preference and court dynamics
without the narrated spirit, and what the spiritual hypothesis adds.

Negative counterfactual-dependence example: no coder should assign a numeric
probability that the lying spirit caused the event.

Category-error counterfactual-dependence example: "ordinary mechanisms can
explain the court scene, therefore spiritual mediation is impossible" violates
non-reductive mediation.

Positive explanatory-necessity example: Ahab's human agency may be coded
necessary for the royal decision in the bounded narrative, while the lying
spirit hypothesis may be coded compatible if it adds theological coherence
without empirical discrimination.

Negative explanatory-necessity example: a hypothesis is not necessary merely
because it is tradition-coherent.

Category-error explanatory-necessity example: coding the spiritual hypothesis
as necessary before assessing Ahab's agency, court consultation, and prophetic
symbolic mediation violates explanatory restraint.

Positive independent-evidence example: the phrase about a spirit proposing to
be a lying spirit in the prophets' mouths is independent evidence for the
textual claim that the narrative proposes a spirit, though not automatic
approval of doctrine or transfer to modern cases.

Negative independent-evidence example: the fact that the episode includes
deception is not independent evidence for a spiritual agent; it is part of the
manifestation to be explained.

Category-error independent-evidence example: treating moral severity, royal
failure, or deception itself as independent proof of spiritual agency is
prohibited.

Positive alternatives example: a valid spiritual-attribution hypothesis keeps
Ahab's agency, court consultation, and prophetic symbolic mediation live as
lower-level explanations.

Negative alternatives example: a coding pass is incomplete if it lists the
lying spirit hypothesis but does not assess human and textual alternatives.

Category-error alternatives example: deleting ordinary explanations because
they feel less theological collapses interdisciplinary evidence into doctrinal
preference.

Positive falsifiability example: `hyp-lying-spirit-mediation` can be weakened
by a theological or literary reading that prohibits treating the spirit as a
distinct agent even within the narrative world.

Negative falsifiability example: "nothing could change this conclusion" is not
a usable falsifier.

Category-error falsifiability example: treating theological importance as
immunity from counterargument turns a hypothesis into an unreviewable
assertion.

### Outcome Examples

Use `underdetermined` when the pilot evidence does not discriminate between
live alternatives. For example, court consultation may remain underdetermined
if the current evidence shows a royal counsel setting but not enough to specify
the independent agency of the court system.

Use `compatible-but-unnecessary` when a proposed attribution is coherent but
does not add necessary explanatory work. For example, a spiritual reading might
be compatible with a tradition while remaining unnecessary to explain a
strictly textual observation about Ahab's preference.

Use `category-error` when a claim collapses categories. For example, "the
mouths of the prophets are the lying spirit" confuses medium and proposed
agent unless a separate agency claim and interpretive argument establish that
identification.
