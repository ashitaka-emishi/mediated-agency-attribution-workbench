const VALID_ATTRIBUTION_STATUSES = new Set([
  "proposed", "plausible", "supported", "strongly-supported",
  "compatible-but-unnecessary", "underdetermined", "weakly-supported",
  "contradicted", "category-error", "not-currently-testable"
]);

const REVIEWED_FINDING_STATUSES = new Set(["reviewed", "promoted"]);
const HUMAN_REVIEW_STATUSES = new Set(["human-reviewed", "approved"]);

function issue(level, code, message, recordRef = null) {
  return { level, code, message, recordRef };
}

function indexById(items, field) {
  return new Map(items.map((item) => [item[field], item]));
}

function duplicateIds(items, field) {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of items) {
    if (!item || typeof item[field] !== "string") continue;
    if (seen.has(item[field])) duplicates.add(item[field]);
    seen.add(item[field]);
  }
  return [...duplicates];
}

function containsAttributionLanguage(text) {
  if (typeof text !== "string") return false;
  return /\b(caused by|controlled by|possessed by|demon(?:ic)?|spiritual agent acted|the institution wanted)\b/i.test(text);
}

export function validateCaseBundle(bundle) {
  const issues = [];
  const caseId = bundle.case?.caseId ?? "unknown-case";

  for (const missing of bundle.missing) {
    issues.push(issue("error", "missing-file", `Missing canonical case file: ${missing}`, caseId));
  }
  if (!bundle.case) return issues;

  const collections = [
    [bundle.sources, "sourceId", "sources"],
    [bundle.passages, "passageId", "passages"],
    [bundle.observations, "observationId", "observations"],
    [bundle.actors, "actorId", "actors"],
    [bundle.events, "eventId", "events"],
    [bundle.mechanisms, "mechanismId", "mechanisms"],
    [bundle.media, "mediumId", "media"],
    [bundle.hypotheses, "hypothesisId", "hypotheses"],
    [bundle.findings, "findingId", "findings"],
    [bundle.reviews, "reviewId", "reviews"],
    [bundle.moralEvaluations, "evaluationId", "moral evaluations"]
  ];

  for (const [items, field, label] of collections) {
    if (!Array.isArray(items)) {
      issues.push(issue("error", "not-array", `${label} must be an array`, caseId));
      continue;
    }
    for (const duplicate of duplicateIds(items, field)) {
      issues.push(issue("error", "duplicate-id", `Duplicate ${field}: ${duplicate}`, duplicate));
    }
  }

  const sources = indexById(bundle.sources, "sourceId");
  const passages = indexById(bundle.passages, "passageId");
  const observations = indexById(bundle.observations, "observationId");
  const actors = indexById(bundle.actors, "actorId");
  const events = indexById(bundle.events, "eventId");
  const mechanisms = indexById(bundle.mechanisms, "mechanismId");
  const media = indexById(bundle.media, "mediumId");
  const hypotheses = indexById(bundle.hypotheses, "hypothesisId");
  const reviews = indexById(bundle.reviews, "reviewId");

  for (const passage of bundle.passages) {
    if (!sources.has(passage.sourceId)) {
      issues.push(issue("error", "unresolved-source",
        `Passage references missing source ${passage.sourceId}`, passage.passageId));
    }
  }

  const evidenceRefs = new Map([
    ...[...passages.keys()].map((id) => [id, "passage"]),
    ...[...observations.keys()].map((id) => [id, "observation"]),
    ...[...events.keys()].map((id) => [id, "event"]),
    ...[...sources.keys()].map((id) => [id, "source"])
  ]);

  for (const observation of bundle.observations) {
    if (observation.caseId !== caseId) {
      issues.push(issue("error", "case-id-mismatch",
        "Observation caseId does not match case", observation.observationId));
    }
    if (containsAttributionLanguage(observation.observation)) {
      issues.push(issue(
        "error",
        "observation-attribution",
        "Observation contains causal or spiritual attribution language; move it into a hypothesis",
        observation.observationId
      ));
    }
    for (const ref of observation.derivedFrom ?? []) {
      if (!passages.has(ref) && !sources.has(ref)) {
        issues.push(issue("error", "unresolved-observation-source",
          `Observation reference does not resolve: ${ref}`, observation.observationId));
      }
    }
  }

  for (const event of bundle.events) {
    for (const ref of event.actorIds ?? []) {
      if (!actors.has(ref)) issues.push(issue("error", "unresolved-event-actor",
        `Missing actor ${ref}`, event.eventId));
    }
    for (const ref of event.mechanismIds ?? []) {
      if (!mechanisms.has(ref)) issues.push(issue("error", "unresolved-event-mechanism",
        `Missing mechanism ${ref}`, event.eventId));
    }
    for (const ref of event.mediumIds ?? []) {
      if (!media.has(ref)) issues.push(issue("error", "unresolved-event-medium",
        `Missing medium ${ref}`, event.eventId));
    }
    for (const ref of event.derivedFrom ?? []) {
      if (!evidenceRefs.has(ref)) issues.push(issue("error", "unresolved-event-evidence",
        `Missing evidence ${ref}`, event.eventId));
    }
  }

  for (const hypothesis of bundle.hypotheses) {
    const id = hypothesis.hypothesisId;

    if (hypothesis.caseId !== caseId) {
      issues.push(issue("error", "case-id-mismatch",
        "Hypothesis caseId does not match case", id));
    }
    if (!VALID_ATTRIBUTION_STATUSES.has(hypothesis.status)) {
      issues.push(issue("error", "invalid-attribution-status",
        `Invalid status ${hypothesis.status}`, id));
    }
    for (const ref of hypothesis.proposedAgentIds ?? []) {
      if (!actors.has(ref)) issues.push(issue("error", "unresolved-agent",
        `Missing proposed agent ${ref}`, id));
    }
    for (const ref of hypothesis.mechanismIds ?? []) {
      if (!mechanisms.has(ref)) issues.push(issue("error", "unresolved-mechanism",
        `Missing mechanism ${ref}`, id));
    }
    for (const ref of hypothesis.mediumIds ?? []) {
      if (!media.has(ref)) issues.push(issue("error", "unresolved-medium",
        `Missing medium ${ref}`, id));
    }
    for (const ref of hypothesis.evidenceSupport ?? []) {
      if (!evidenceRefs.has(ref)) issues.push(issue("error", "unresolved-evidence",
        `Missing supporting evidence ${ref}`, id));
    }
    for (const ref of hypothesis.evidenceAgainst ?? []) {
      if (!evidenceRefs.has(ref)) issues.push(issue("error", "unresolved-counterevidence",
        `Missing counterevidence ${ref}`, id));
    }
    for (const ref of hypothesis.alternativeHypothesisIds ?? []) {
      if (ref === id) issues.push(issue("error", "self-alternative",
        "Hypothesis cannot be its own alternative", id));
      if (!hypotheses.has(ref)) issues.push(issue("error", "unresolved-alternative",
        `Missing alternative hypothesis ${ref}`, id));
    }
    for (const ref of hypothesis.lowerLevelExplanationsAssessed ?? []) {
      if (!hypotheses.has(ref)) issues.push(issue("error", "unresolved-lower-level",
        `Missing lower-level hypothesis ${ref}`, id));
    }
    if (!(hypothesis.assumptions?.length > 0)) {
      issues.push(issue("error", "missing-assumptions",
        "Hypothesis must state assumptions", id));
    }
    if (!(hypothesis.falsifiers?.length > 0)) {
      issues.push(issue("error", "missing-falsifiers",
        "Hypothesis must state falsifiers or discriminators", id));
    }
    if (!(hypothesis.mechanismIds?.length > 0) || !(hypothesis.mediumIds?.length > 0)) {
      issues.push(issue("error", "unmediated-attribution",
        "Hypothesis must identify both mechanism and medium", id));
    }

    const proposedActors = (hypothesis.proposedAgentIds ?? [])
      .map((ref) => actors.get(ref))
      .filter(Boolean);
    const includesSpiritualAgent = proposedActors.some(
      (actor) => actor.ontologicalClass === "nonhuman-spiritual-agent"
    );

    if (includesSpiritualAgent) {
      if (hypothesis.humanReviewRequired !== true) {
        issues.push(issue("error", "spiritual-human-gate",
          "Spiritual attribution must require human review", id));
      }
      if (!(hypothesis.lowerLevelExplanationsAssessed?.length > 0)) {
        issues.push(issue("error", "spiritual-restraint",
          "Spiritual attribution must assess lower-level explanations", id));
      }
      const independent = hypothesis.independentEvidence?.length ?? 0;
      const allowedWithoutIndependent = new Set([
        "compatible-but-unnecessary", "underdetermined",
        "not-currently-testable", "weakly-supported"
      ]);
      if (independent === 0 && !allowedWithoutIndependent.has(hypothesis.status)) {
        issues.push(issue(
          "error",
          "spiritual-independent-evidence",
          "Without independent evidence, spiritual attribution must remain qualified",
          id
        ));
      }
      if (hypothesis.reviewStatus === "approved") {
        issues.push(issue("error", "spiritual-auto-approval",
          "Repository validation never auto-approves spiritual attribution", id));
      }
    }
  }

  for (const finding of bundle.findings) {
    for (const ref of finding.hypothesisIds ?? []) {
      if (!hypotheses.has(ref)) issues.push(issue("error",
        "unresolved-finding-hypothesis", `Missing hypothesis ${ref}`, finding.findingId));
    }
    for (const ref of finding.humanReviewIds ?? []) {
      if (!reviews.has(ref)) issues.push(issue("error",
        "unresolved-finding-review", `Missing review ${ref}`, finding.findingId));
    }
    if (REVIEWED_FINDING_STATUSES.has(finding.status) ||
        HUMAN_REVIEW_STATUSES.has(finding.reviewStatus)) {
      const acceptedHumanReviews = bundle.reviews.filter(
        (review) =>
          review.targetRef === finding.findingId &&
          review.reviewerType === "human" &&
          ["accept", "accept-with-revision"].includes(review.decision)
      );
      if (acceptedHumanReviews.length === 0) {
        issues.push(issue("error", "finding-human-review",
          "Reviewed or promoted finding requires accepted human review",
          finding.findingId));
      }
    }
    if (finding.empiricalConclusion === finding.theologicalConclusion) {
      issues.push(issue("warning", "causal-theological-collapse",
        "Empirical and theological conclusions should be independently stated",
        finding.findingId));
    }
  }

  for (const evaluation of bundle.moralEvaluations) {
    if (evaluation.causalInferenceProhibited !== true) {
      issues.push(issue("error", "moral-causal-collapse",
        "Moral evaluation must prohibit causal inference from moral judgment",
        evaluation.evaluationId));
    }
  }

  if (bundle.argumentGraph) {
    const nodes = indexById(bundle.argumentGraph.nodes ?? [], "nodeId");
    for (const edge of bundle.argumentGraph.edges ?? []) {
      if (!nodes.has(edge.from)) issues.push(issue("error", "unresolved-graph-node",
        `Missing graph node ${edge.from}`, edge.edgeId));
      if (!nodes.has(edge.to)) issues.push(issue("error", "unresolved-graph-node",
        `Missing graph node ${edge.to}`, edge.edgeId));
    }
  }

  return issues;
}

export function summarizeIssues(issues) {
  return {
    errors: issues.filter((item) => item.level === "error").length,
    warnings: issues.filter((item) => item.level === "warning").length,
    issues
  };
}
