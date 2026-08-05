#!/usr/bin/env node
import path from "node:path";
import { loadProject } from "../lib/project.js";
import { loadAllCases } from "../lib/case-loader.js";
import { buildIndexes } from "../lib/indexes.js";
import { writeJson } from "../lib/io.js";
import { summarizeIssues, validateCaseBundle } from "../lib/rules.js";

const project = loadProject();
const bundles = loadAllCases(project.paths.cases);
const validation = summarizeIssues(bundles.flatMap(validateCaseBundle));

if (validation.errors > 0) {
  console.error("Generation blocked because validation failed.");
  process.exit(1);
}

const indexes = buildIndexes(bundles);
const generatedAt = new Date().toISOString();

writeJson(path.join(project.paths.generated, "case-index.json"), {
  schemaVersion: project.manifest.schemaVersion,
  generatedAt,
  records: indexes.caseIndex
});
writeJson(path.join(project.paths.generated, "hypothesis-index.json"), {
  schemaVersion: project.manifest.schemaVersion,
  generatedAt,
  records: indexes.hypothesisIndex
});
writeJson(path.join(project.paths.generated, "traceability-index.json"), {
  schemaVersion: project.manifest.schemaVersion,
  generatedAt,
  records: indexes.traceabilityIndex
});

console.log(`Generated indexes for ${bundles.length} case(s).`);
