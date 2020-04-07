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

For reference: https://github.com/nodejs/Release

## Development

* Prettier
  * all code follows Prettier's opinionated code format
  * [Prettier Docs](https://prettier.io/docs/en/index.html)
* Eslint
  * linting
  * utilizes the Prettier plugin to ensure compatibility
* cross-var
  * used to ensure cross platform compatibility with Node provided env vars

## License

UNLICENSED
