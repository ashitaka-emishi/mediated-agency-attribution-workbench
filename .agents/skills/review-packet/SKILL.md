---
name: review-packet
description: "Use when preparing human-readable MAAW review packets from canonical records, especially for findings, spiritual-attribution hypotheses, reliability/adjudication records, publication/export gates, or reviewed-version gates. Produces prose-first packets with traceability links back to project files and leaves approvals/promotion decisions to the human reviewer."
---

# Review Packet

Use this skill to prepare review packets that humans can actually review. The
packet should summarize canonical data in prose, provide tables and reviewer
prompts, and link back to source files for traceability.

For approval, promotion, publication/export, or reviewed-version decisions, also
use `$review-gate`. For issue branches, commits, PRs, or merges, also use
`$sdlc-workflow`.

## Workflow

1. Inspect the issue, target artifacts, relevant schemas, and canonical records.
2. Start from `docs/templates/human-review-packet-template.md`.
3. Save packets under `docs/reviews/` with a stable kebab-case filename.
4. Write a plain-language task section before technical record tables.
5. Link every artifact path to the underlying project file using relative
   Markdown links from the packet.
6. Convert JSON fields into reviewer-facing prose:
   - claim or finding;
   - evidence currently used;
   - why it matters;
   - assumptions;
   - falsifiers or revision triggers;
   - alternatives and underdetermination;
   - reliability/adjudication state;
   - remaining human gates.
7. Preserve IDs in backticks so the packet remains traceable.
8. Leave decision fields blank or `pending` unless the human reviewer explicitly
   supplies a decision.
9. Do not edit canonical statuses, approve spiritual attribution, promote
   findings, publish/export, or tag reviewed versions unless the active review
   issue explicitly records that human decision.
10. Run validation appropriate to the change. For docs-only packets,
    `npm run validate` is usually sufficient unless linked generated outputs are
    affected.

## Packet Rules

- Human readability comes first; JSON is the source, not the review surface.
- Keep causal attribution, moral evaluation, and theological judgment separate.
- Never infer spiritual agency from moral severity.
- Never use ordinary mechanisms as proof that spiritual mediation is impossible.
- Keep rival explanations live unless a human-reviewed decision explicitly
  rejects them.
- Model reliability agreement can support a packet, but it cannot approve,
  promote, publish, export, or pin anything.

## Template

Use this project template:

- `docs/templates/human-review-packet-template.md`

Only copy sections that fit the review target. Add target-specific review cards
when a table alone would force the reviewer back into the JSON.
