import test from "node:test";
import assert from "node:assert/strict";
import { loadProject } from "../src-js/lib/project.js";
import { loadAllCases } from "../src-js/lib/case-loader.js";
import { validateCaseBundle } from "../src-js/lib/rules.js";

test("pilot case passes epistemic validation", () => {
  const project = loadProject();
  const [bundle] = loadAllCases(project.paths.cases);
  const errors = validateCaseBundle(bundle)
    .filter((item) => item.level === "error");
  assert.deepEqual(errors, []);
});

test("observation records cannot contain causal spiritual attribution", () => {
  const project = loadProject();
  const [bundle] = loadAllCases(project.paths.cases);
  const clone = structuredClone(bundle);
  clone.observations[0].observation =
    "The court was controlled by a demonic agent.";
  const issues = validateCaseBundle(clone);
  assert.ok(issues.some((item) => item.code === "observation-attribution"));
});

test("spiritual attribution requires lower-level assessment and human gate", () => {
  const project = loadProject();
  const [bundle] = loadAllCases(project.paths.cases);
  const clone = structuredClone(bundle);
  const spiritual = clone.hypotheses.find(
    (item) => item.hypothesisId === "hyp-lying-spirit-mediation"
  );
  spiritual.lowerLevelExplanationsAssessed = [];
  spiritual.independentEvidence = [];
  spiritual.humanReviewRequired = false;
  spiritual.status = "supported";
  const codes = new Set(
    validateCaseBundle(clone).map((item) => item.code)
  );
  assert.ok(codes.has("spiritual-restraint"));
  assert.ok(codes.has("spiritual-human-gate"));
  assert.ok(codes.has("spiritual-independent-evidence"));
});

test("reviewed finding requires accepted human review", () => {
  const project = loadProject();
  const [bundle] = loadAllCases(project.paths.cases);
  const clone = structuredClone(bundle);
  clone.findings[0].status = "reviewed";
  clone.findings[0].reviewStatus = "human-reviewed";
  const issues = validateCaseBundle(clone);
  assert.ok(issues.some((item) => item.code === "finding-human-review"));
});

test("model reliability output cannot cross human review gates", () => {
  const project = loadProject();
  const [bundle] = loadAllCases(project.paths.cases);
  const clone = structuredClone(bundle);
  clone.reliability[0].coderOutputs[0].reviewStatus = "human-reviewed";
  clone.reliability[0].promotionGate.promotesFinding = true;
  clone.reliability[0].promotionGate.approvesSpiritualAttribution = true;
  const codes = new Set(
    validateCaseBundle(clone).map((item) => item.code)
  );
  assert.ok(codes.has("model-output-human-reviewed"));
  assert.ok(codes.has("reliability-promotion-gate"));
});

test("reliability references must resolve to case records", () => {
  const project = loadProject();
  const [bundle] = loadAllCases(project.paths.cases);
  const clone = structuredClone(bundle);
  clone.reliability[0].sourcePacket.evidenceShown.push("obs-missing");
  clone.reliability[0].coderOutputs[0].proposedHypotheses[0]
    .linkedHypothesisIds = ["hyp-missing"];
  const codes = new Set(
    validateCaseBundle(clone).map((item) => item.code)
  );
  assert.ok(codes.has("unresolved-reliability-evidence"));
  assert.ok(codes.has("unresolved-reliability-hypothesis"));
});
