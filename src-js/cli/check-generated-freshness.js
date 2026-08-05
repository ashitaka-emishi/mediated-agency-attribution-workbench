#!/usr/bin/env node
import { allJsonFiles, fileMtime } from "../lib/io.js";
import { loadProject } from "../lib/project.js";

const project = loadProject();
const canonicalFiles = [
  ...allJsonFiles(project.paths.cases),
  ...allJsonFiles(project.paths.ontology),
  ...allJsonFiles(project.paths.traditions)
];
const generatedFiles = allJsonFiles(project.paths.generated);

if (generatedFiles.length === 0) {
  console.error("No generated indexes found. Run npm run generate.");
  process.exit(1);
}

const newestCanonical = Math.max(...canonicalFiles.map(fileMtime));
const oldestGenerated = Math.min(...generatedFiles.map(fileMtime));

if (oldestGenerated < newestCanonical) {
  console.error("Generated indexes are stale. Run npm run generate.");
  process.exit(1);
}

console.log("Generated indexes are fresh.");
