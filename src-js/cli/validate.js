#!/usr/bin/env node
import { loadProject } from "../lib/project.js";
import { loadAllCases } from "../lib/case-loader.js";
import { summarizeIssues, validateCaseBundle } from "../lib/rules.js";

const project = loadProject();
const bundles = loadAllCases(project.paths.cases);
const issues = bundles.flatMap(validateCaseBundle);
const summary = summarizeIssues(issues);

for (const item of summary.issues) {
  const ref = item.recordRef ? ` [${item.recordRef}]` : "";
  console.log(`${item.level.toUpperCase()} ${item.code}${ref}: ${item.message}`);
}

console.log(
  `Validated ${bundles.length} case(s): ` +
  `${summary.errors} error(s), ${summary.warnings} warning(s).`
);
process.exitCode = summary.errors > 0 ? 1 : 0;
