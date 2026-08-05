#!/usr/bin/env node
import { loadProject } from "../lib/project.js";
import { loadAllCases } from "../lib/case-loader.js";
import { summarizeIssues, validateCaseBundle } from "../lib/rules.js";

const project = loadProject();
const bundles = loadAllCases(project.paths.cases);
const validation = summarizeIssues(bundles.flatMap(validateCaseBundle));

const totals = bundles.reduce((acc, bundle) => {
  for (const key of [
    "sources", "passages", "observations", "actors", "events",
    "mechanisms", "media", "hypotheses", "findings", "reviews"
  ]) {
    acc[key] = (acc[key] ?? 0) + bundle[key].length;
  }
  return acc;
}, {});

const statuses = {};
for (const bundle of bundles) {
  for (const hypothesis of bundle.hypotheses) {
    statuses[hypothesis.status] = (statuses[hypothesis.status] ?? 0) + 1;
  }
}

console.log("MAAW project summary");
console.log(`Cases: ${bundles.length}`);
for (const [key, value] of Object.entries(totals)) {
  console.log(`${key}: ${value}`);
}
console.log("Hypothesis statuses:");
for (const [key, value] of Object.entries(statuses).sort()) {
  console.log(`  ${key}: ${value}`);
}
console.log(
  `Validation: ${validation.errors} error(s), ` +
  `${validation.warnings} warning(s)`
);
process.exitCode = validation.errors > 0 ? 1 : 0;
