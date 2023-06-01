install:
	npm ci

lint:
	npx eslint .
brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
