export type OntologicalClass =
  | "human-person"
  | "psychological-pattern"
  | "collective-actor"
  | "institution"
  | "symbolic-order"
  | "technical-system"
  | "emergent-pattern"
  | "nonhuman-spiritual-agent"
  | "material-object"
  | "ritual-process";

export type AttributionStatus =
  | "proposed"
  | "plausible"
  | "supported"
  | "strongly-supported"
  | "compatible-but-unnecessary"
  | "underdetermined"
  | "weakly-supported"
  | "contradicted"
  | "category-error"
  | "not-currently-testable";

export interface Actor {
  actorId: string;
  caseId: string;
  name: string;
  ontologicalClass: OntologicalClass;
  description?: string;
  identityCriteria?: string[];
  persistenceCriteria?: string[];
  status?: "observed" | "proposed" | "analytical-construct" | "tradition-claim";
}

export interface AttributionHypothesis {
  hypothesisId: string;
  caseId: string;
  title: string;
  proposedAgentIds: string[];
  agencyClaim: string;
  agencyType:
    | "intentional"
    | "collective-intentional"
    | "institutional"
    | "systemic"
    | "formal"
    | "final"
    | "symbolic"
    | "spiritual-proposed"
    | "layered";
  mechanismIds: string[];
  mediumIds: string[];
  manifestations: string[];
  evidenceSupport: string[];
  evidenceAgainst?: string[];
  alternativeHypothesisIds: string[];
  assumptions: string[];
  falsifiers: string[];
  lowerLevelExplanationsAssessed?: string[];
  independentEvidence?: string[];
  status: AttributionStatus;
  explanatoryNecessity:
    | "necessary"
    | "contributory"
    | "compatible"
    | "unnecessary"
    | "unknown";
  empiricalStatus:
    | "discriminated"
    | "partially-discriminated"
    | "underdetermined"
    | "not-empirically-testable"
    | "contradicted";
  theologicalStatus:
    | "not-applicable"
    | "tradition-coherent"
    | "tradition-contested"
    | "canonically-argued"
    | "metaphysical-proposal"
    | "unassessed";
  humanReviewRequired: boolean;
  createdBy: "human" | "ai" | "script" | "imported";
  reviewStatus: string;
  notes?: string;
}
