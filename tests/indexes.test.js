import test from "node:test";
import assert from "node:assert/strict";
import { loadProject } from "../src-js/lib/project.js";
import { loadAllCases } from "../src-js/lib/case-loader.js";
import { buildIndexes } from "../src-js/lib/indexes.js";

test("indexes preserve case and hypothesis identifiers", () => {
  const project = loadProject();
  const bundles = loadAllCases(project.paths.cases);
  const indexes = buildIndexes(bundles);
  assert.equal(
    indexes.caseIndex[0].caseId,
    "institutional-sacrificial-escalation"
  );
  assert.ok(
    indexes.hypothesisIndex.some(
      (item) => item.hypothesisId === "hyp-layered-spiritual"
    )
  );
  assert.ok(
    indexes.traceabilityIndex.some(
      (item) => item.findingId === "finding-pilot-attribution"
    )
  );
});
