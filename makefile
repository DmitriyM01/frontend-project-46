install:
	npm ci

check:
	node bin/gendiff.js f1.yaml f2.json
test:
	npm test

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

test-coverage:
	npm test -- --coverage --coverageProvider=v8

r:
	git add .
	git commit -m 'fix'
	git push
