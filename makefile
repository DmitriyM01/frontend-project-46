install:
	npm ci

check:
	node bin/gendiff.js f1.json f2.json

test:
	npm test

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

r:
	git add .
	git commit -m 'fix'
	git push
