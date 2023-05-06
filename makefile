install:
	npm ci

check:
	node bin/gendiff.js -f json f1.json f2.json
test:
	npm test

r:
	git add .
	git commit -m 'trying find errors'
	git push

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

test-coverage:
	npm test -- --coverage --coverageProvider=v8
