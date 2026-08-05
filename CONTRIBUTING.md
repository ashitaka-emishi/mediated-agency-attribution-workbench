# Contributing

Use issue-directed changes and the repository SDLC workflow. Preserve
traceability, alternatives, uncertainty, source rights, and human review gates.

Before submitting:

```sh
npm run validate
npm test
python3 -m unittest discover -s test-py -v
npm run generate
npm run freshness:generated
```

Ontology, schema, codebook, spiritual-attribution, promotion, and publication
changes require explicit human review.
