export function buildIndexes(bundles) {
  const caseIndex = bundles.map((bundle) => ({
    caseId: bundle.case.caseId,
    title: bundle.case.title,
    status: bundle.case.status,
    reviewStatus: bundle.case.reviewStatus,
    counts: {
      sources: bundle.sources.length,
      passages: bundle.passages.length,
      observations: bundle.observations.length,
      actors: bundle.actors.length,
      events: bundle.events.length,
      mechanisms: bundle.mechanisms.length,
      media: bundle.media.length,
      hypotheses: bundle.hypotheses.length,
      findings: bundle.findings.length,
      reliability: bundle.reliability.length,
      reviews: bundle.reviews.length
    }
  }));

  const hypothesisIndex = bundles.flatMap((bundle) =>
    bundle.hypotheses.map((hypothesis) => ({
      caseId: bundle.case.caseId,
      hypothesisId: hypothesis.hypothesisId,
      title: hypothesis.title,
      status: hypothesis.status,
      agencyType: hypothesis.agencyType,
      explanatoryNecessity: hypothesis.explanatoryNecessity,
      empiricalStatus: hypothesis.empiricalStatus,
      theologicalStatus: hypothesis.theologicalStatus,
      reviewStatus: hypothesis.reviewStatus,
      humanReviewRequired: hypothesis.humanReviewRequired
    }))
  );

  const traceabilityIndex = bundles.flatMap((bundle) =>
    bundle.findings.map((finding) => ({
      caseId: bundle.case.caseId,
      findingId: finding.findingId,
      status: finding.status,
      reviewStatus: finding.reviewStatus,
      hypothesisIds: finding.hypothesisIds,
      humanReviewIds: finding.humanReviewIds
    }))
  );

  return { caseIndex, hypothesisIndex, traceabilityIndex };
}
