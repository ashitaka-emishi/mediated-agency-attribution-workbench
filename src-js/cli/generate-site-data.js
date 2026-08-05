#!/usr/bin/env node
import path from "node:path";
import { loadProject } from "../lib/project.js";
import { loadAllCases } from "../lib/case-loader.js";
import { buildIndexes } from "../lib/indexes.js";
import { writeJson } from "../lib/io.js";

const project = loadProject();
const bundles = loadAllCases(project.paths.cases);
const indexes = buildIndexes(bundles);
const output = path.join(project.paths.site, "generated", "summary.json");

writeJson(output, {
  projectId: project.manifest.projectId,
  generatedAt: new Date().toISOString(),
  cases: indexes.caseIndex,
  hypotheses: indexes.hypothesisIndex,
  traceability: indexes.traceabilityIndex
});

console.log(`Wrote ${path.relative(project.root, output)}.`);
