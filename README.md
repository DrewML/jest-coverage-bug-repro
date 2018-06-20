This is a boiled down example of a bug with Jest's code coverage reporting, when used in combination with the default caching and a monorepo (Lerna).

## Replicate

1. Clone the repository
2. Run `npm install && npm run bootstrap`
3. Run `npm run test:nocache`, and note in stdout that `project1/index.js` and `project2/index.js` both have 100% coverage. This is the result of running the tests with the `--no-cache` flag
4. Run `npm run test:cache`, and note in stdout we only see code coverage for 1 project. This is the result of running the tests with no flags
5. Run `npm run test:ohno`, and note in stdout we only see code coverage for 1 project. This is the result of running the tests with `--no-cache` and `-i`