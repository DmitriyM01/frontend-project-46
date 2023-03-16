install:
	npm ci

test:
	node bin/gendiff.js f1.json f2.json

lint:
	npx eslint .
	
publish:
	npm publish --dry-run