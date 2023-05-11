install:
	npm ci

check:
	node bin/gendiff.js -f json f1.json f2.json

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

r:
	git add .
	git commit -m 'qfix'
	git push

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

