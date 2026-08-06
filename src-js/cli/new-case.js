#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { loadProject } from "../lib/project.js";
import { writeJson } from "../lib/io.js";

const [caseId, title] = process.argv.slice(2);
if (!caseId || !title) {
  console.error('Usage: npm run case:new -- my-case-id "My Case Title"');
  process.exit(1);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(caseId)) {
  console.error("caseId must be lowercase kebab-case.");
  process.exit(1);
}

const project = loadProject();
const directory = path.join(project.paths.cases, caseId);
if (fs.existsSync(directory)) {
  console.error(`Case already exists: ${caseId}`);
  process.exit(1);
}
fs.mkdirSync(directory, { recursive: true });

writeJson(path.join(directory, "case.json"), {
  $schema: "../../../schemas/case.schema.json",
  caseId,
  title,
  researchQuestion: "TODO",
  status: "scaffold",
  scope: "TODO",
  geography: [],
  traditionLensIds: [],
  createdBy: "human",
  reviewStatus: "draft",
  publicationStatus: "private-note",
  notes: ""
});

for (const file of [
  "sources.json", "passages.json", "observations.json", "actors.json",
  "events.json", "mechanisms.json", "media.json", "hypotheses.json",
  "findings.json", "reliability.json", "reviews.json", "moral-evaluations.json"
]) {
  writeJson(path.join(directory, file), []);
}
writeJson(path.join(directory, "argument-graph.json"), {
  caseId,
  nodes: [],
  edges: []
});

console.log(`Created case scaffold: ${path.relative(project.root, directory)}`);
