#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { loadProject } from "../lib/project.js";
import { loadAllCases } from "../lib/case-loader.js";
import { readJson, writeJson } from "../lib/io.js";
import { summarizeIssues, validateCaseBundle } from "../lib/rules.js";

const project = loadProject();
const bundles = loadAllCases(project.paths.cases);
const validation = summarizeIssues(bundles.flatMap(validateCaseBundle));

if (validation.errors > 0) {
  console.error("PPW export blocked because validation failed.");
  process.exit(1);
}

const exportable = [];
for (const bundle of bundles) {
  for (const finding of bundle.findings) {
    const acceptedHumanReviews = bundle.reviews.filter(
      (review) =>
        review.targetRef === finding.findingId &&
        review.reviewerType === "human" &&
        ["accept", "accept-with-revision"].includes(review.decision)
    );

    if (
      ["reviewed", "promoted"].includes(finding.status) &&
      ["human-reviewed", "approved"].includes(finding.reviewStatus) &&
      acceptedHumanReviews.length > 0
    ) {
      exportable.push({
        caseId: bundle.case.caseId,
        finding,
        hypotheses: bundle.hypotheses.filter((hypothesis) =>
          finding.hypothesisIds.includes(hypothesis.hypothesisId)
        ),
        reviews: acceptedHumanReviews
      });
    }
  }
}

const outputDirectory = path.join(project.paths.ppwIntegration, "generated");
fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

writeJson(
  path.join(outputDirectory, "module.json"),
  readJson(path.join(project.paths.ppwIntegration, "evidence-module.json"))
);
writeJson(path.join(outputDirectory, "export.json"), {
  schemaVersion: project.manifest.schemaVersion,
  generatedAt: new Date().toISOString(),
  exportPolicy: "human-reviewed-findings-only",
  records: exportable
});

console.log(
  `Exported ${exportable.length} reviewed finding(s) to ` +
  `${path.relative(project.root, outputDirectory)}.`
);
