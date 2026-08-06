# Project Status

## Scaffold state

- canonical project manifest: complete
- VS Code workspace and tasks: complete
- Codex/agent instructions and SDLC skill: complete
- JSON Schema contracts: initial version complete
- ontology registry and tradition lenses: initial version complete
- pilot case traceability chain: complete
- semantic validation rules: complete
- deterministic generated indexes: complete
- Node.js tests: passing
- Python tests: passing
- blinded coding packet template: complete
- initial codebook coding passes and provisional adjudication: complete
- Epic 10 ontology/schema impact review: complete; no migration accepted
- canonical reliability/adjudication storage: initial schema and 1 Kings 22
  provisional migration complete
- biblical pilot case: 1 Kings 22 scaffold complete
- external export surface: deferred pending a separate integration issue
- Quarto publication skeleton: complete

## Known intentional limitations

- the pilot is not a historical finding;
- schema validation is complemented by custom semantic validation but does not
  yet invoke a full JSON Schema engine;
- no adjudication queue generator is implemented yet;
- no ontology class, relation, or status vocabulary migration has been
  accepted beyond the reliability/adjudication storage schema;
- no temporal causal graph or intervention log is implemented yet;
- no finding has passed human review, so publication remains private;
- biblical terms are not yet mapped directly onto ontology classes.

## Recommended first issue

**Epic 10 / Issue 1: Formalize the agency-attribution codebook**

Acceptance criteria:

1. define agent, cause, mechanism, medium, manifestation, and interpretation;
2. define identity, persistence, directionality, selectivity, responsiveness,
   counterfactual, necessity, and independent-evidence coding rules;
3. add positive examples, negative examples, and category-error examples;
4. create a blinded coding packet;
5. run at least two independent human or model coding passes;
6. adjudicate disagreements before changing the ontology.
