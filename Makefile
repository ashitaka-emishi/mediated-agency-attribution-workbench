.PHONY: validate test build generate summary site preview clean

validate:
	npm run validate

test:
	npm test
	python3 -m unittest discover -s test-py -v

build:
	npm run build

generate:
	npm run generate

summary:
	npm run summary

site:
	npm run site

preview:
	npm run site:preview

clean:
	rm -rf data/generated/*.json site/generated/*.json
