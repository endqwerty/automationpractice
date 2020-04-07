# Automation Practice

## Description

Designed for the "Production" mode of this app to be executing the test cases.

The "Development" mode of this app is for creating/updating the test cases or test framework.

Test Stack:

* Nightwatch
  * Selenium
* CircleCI
* Browserstack

## Minimum Versions

Only currently supported Node LTS versions are supported.

Currently, that is Node>=10.0.0

This limitation is due to Chromedriver only supporting LTS. Workarounds are available but unsupported.

For reference: [Node LTS Schedule](https://github.com/nodejs/Release)

## Required Configuration

Add in the values that exist in `.env.example`.
Recognize that LOCATION is used as a value by the scripts.

## Development

* Prettier
  * all code follows Prettier's opinionated code format
  * [Prettier Docs](https://prettier.io/docs/en/index.html)
* Eslint
  * linting
  * utilizes the Prettier plugin to ensure compatibility
* cross-var
  * ensures cross platform compatibility with Node provided env vars
* dotenv
  * loads env secrets into the running env

## License

MIT
