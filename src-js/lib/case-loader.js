import path from "node:path";
import { exists, listDirectories, readJson } from "./io.js";

const ARRAY_FILES = [
  "sources.json",
  "passages.json",
  "observations.json",
  "actors.json",
  "events.json",
  "mechanisms.json",
  "media.json",
  "hypotheses.json",
  "findings.json",
  "reviews.json",
  "moral-evaluations.json"
];

function keyFor(fileName) {
  return fileName
    .replace(".json", "")
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function loadCase(caseDirectory) {
  const required = ["case.json", ...ARRAY_FILES, "argument-graph.json"];
  const missing = required.filter((name) => !exists(path.join(caseDirectory, name)));
  const bundle = {
    directory: caseDirectory,
    missing,
    case: exists(path.join(caseDirectory, "case.json"))
      ? readJson(path.join(caseDirectory, "case.json"))
      : null,
    argumentGraph: exists(path.join(caseDirectory, "argument-graph.json"))
      ? readJson(path.join(caseDirectory, "argument-graph.json"))
      : null
  };

  for (const name of ARRAY_FILES) {
    bundle[keyFor(name)] = exists(path.join(caseDirectory, name))
      ? readJson(path.join(caseDirectory, name))
      : [];
  }
  return bundle;
}

export function loadAllCases(casesDirectory) {
  return listDirectories(casesDirectory).map(loadCase);
}
