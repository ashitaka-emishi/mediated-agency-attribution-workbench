#!/usr/bin/env node
import path from "node:path";
import { loadProject } from "../lib/project.js";
import { loadAllCases } from "../lib/case-loader.js";
import { buildIndexes } from "../lib/indexes.js";
import { exists, readJson } from "../lib/io.js";

const project = loadProject();
const bundles = loadAllCases(project.paths.cases);
const indexes = buildIndexes(bundles);

const expected = new Map([
  ["case-index.json", indexes.caseIndex],
  ["hypothesis-index.json", indexes.hypothesisIndex],
  ["traceability-index.json", indexes.traceabilityIndex]
]);

const stale = [];

for (const [fileName, records] of expected.entries()) {
  const filePath = path.join(project.paths.generated, fileName);
  if (!exists(filePath)) {
    stale.push(fileName);
    continue;
  }

  const actual = readJson(filePath);
  const actualComparable = {
    schemaVersion: actual.schemaVersion,
    records: actual.records
  };
  const expectedComparable = {
    schemaVersion: project.manifest.schemaVersion,
    records
  };

  if (JSON.stringify(actualComparable) !== JSON.stringify(expectedComparable)) {
    stale.push(fileName);
  }
}

if (stale.length > 0) {
  console.error(
    "Generated indexes are stale. Run npm run generate. Stale files: " +
    stale.join(", ")
  );
  process.exit(1);
}

console.log("Generated indexes are fresh.");
