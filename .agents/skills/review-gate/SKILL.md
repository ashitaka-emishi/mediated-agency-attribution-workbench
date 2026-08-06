---
name: review-gate
description: "Use when Codex needs to prepare, record, or audit human review gates for MAAW research artifacts: finding promotion, spiritual-attribution approval, ontology or schema approval, publication/export approval, canonical reliability/adjudication promotion, or reviewed version/tag pinning. Use after SDLC work produces human-gated artifacts, when the user asks for review, approval, promotion, release/tagging of reviewed research state, or when a workflow must distinguish ordinary PR merge from human acceptance."
---

# Review Gate

## Overview

Use this skill to handle MAAW's human decision boundary. SDLC work may merge
draft or provisional artifacts, but this workflow controls whether an artifact
is accepted, promoted, approved, published, exported, or pinned as a reviewed
version.

This skill does not make theological, spiritual-attribution, or publication
decisions. It prepares the review packet, records explicit human decisions, and
keeps rejected and deferred alternatives traceable.

## Boundary

Distinguish two kinds of versioning:

- Git/SDLC versioning records what changed in the repository.
- Reviewed research-artifact versioning records what a human accepted,
  rejected, deferred, promoted, published, exported, or pinned.

An ordinary merged pull request is not human approval of a finding, spiritual
attribution, ontology migration, schema migration, export, publication, or
reviewed tag unless the issue and review record explicitly say so.

## Human-Gated Actions

Use a review-gate workflow for:

- spiritual-attribution approval;
- finding promotion;
- ontology, controlled-vocabulary, or schema approval;
- canonical promotion of imported, AI-generated, or model-coded artifacts;
- reliability/adjudication acceptance;
- source-rights approval;
- publication approval;
- external export approval;
- reviewed version or tag creation.

AI/model output and reliability agreement may inform the packet, but they never
approve, promote, publish, export, or tag a reviewed research state by
themselves.

## Workflow

1. Identify the target artifact and its current status.
2. Inspect the relevant schemas, canonical records, generated derivatives, and
   SDLC issues or PRs that produced the artifact.
3. Prepare a review packet that includes evidence, alternatives, assumptions,
   falsifiers, unresolved uncertainty, provenance/rights concerns, and the
   exact decision requested.
4. Ask for or record the human decision using the repository's controlled
   decision language where available: accept, accept-with-revision, revise,
   reject, abstain, defer, promote, publish, export, or tag.
5. Apply only the explicitly approved changes. Keep rejected or deferred
   alternatives live and traceable.
6. If canonical data, ontology, schemas, publication, export, or tags change,
   use `$sdlc-workflow` for the implementation issue, PR, validation, merge,
   and commit attribution.
7. Report schema impact, migration impact, validation, version/tag impact, and
   unresolved epistemic risks.

## Promotion Issues And Tags

A promotion issue may pin a reviewed version or tag when the human decision
explicitly requests it. The issue should state:

- artifact IDs or paths being reviewed;
- source commit or PR range;
- reviewer identity or authority;
- decision and rationale;
- exact status changes;
- tag name, if any;
- publication or export boundary, if any;
- unresolved uncertainties and live alternatives.

Use tags only for meaningful reviewed research states. Suggested tag shapes:

- `review/1-kings-22-pilot-v0.1`
- `artifact/epic-10-codebook-v1`
- `publication/private-preview-2026-08-06`

Do not create a reviewed tag from an ordinary implementation PR unless the
human review issue explicitly authorizes that tag.

## Stop Conditions

Stop and ask the user for a human decision when:

- the requested action would approve or reject a spiritual attribution;
- a draft finding would become accepted, reviewed, public, or exported;
- AI-generated, imported, or model-coded content would become canonical;
- ontology, controlled vocabulary, or schema changes need acceptance;
- source rights or provenance determine publication/export eligibility;
- a reviewed version tag would be created or moved;
- the human decision is ambiguous or missing.

If the user asks only for preparation, prepare the packet and stop before
changing canonical statuses or tags.
