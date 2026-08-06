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
    "1-kings-22-lying-spirit"
  );
  assert.ok(
    indexes.hypothesisIndex.some(
      (item) => item.hypothesisId === "hyp-lying-spirit-mediation"
    )
  );
  assert.ok(
    indexes.traceabilityIndex.some(
      (item) => item.findingId === "finding-biblical-pilot-attribution"
    )
  );
});
