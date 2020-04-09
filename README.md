# Automation Practice

Master Branch: [![endqwerty](https://circleci.com/gh/endqwerty/automationpractice.svg?style=svg)](https://app.circleci.com/pipelines/github/endqwerty/automationpractice)

Latest Build: [![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=YjhVa1UyQkFPZVVuVjZqT0swVDF4ZmFacE1PTFB0SmwxUloydmozdWxjQT0tLWdIVkFWSkxtZVB0VzdiamhXNkxKN2c9PQ==--7919c8f6280c13d074d921979b102357f3e09561)](https://automate.browserstack.com/public-build/YjhVa1UyQkFPZVVuVjZqT0swVDF4ZmFacE1PTFB0SmwxUloydmozdWxjQT0tLWdIVkFWSkxtZVB0VzdiamhXNkxKN2c9PQ==--7919c8f6280c13d074d921979b102357f3e09561)

## Description

Automation tests that run against the website: [automationpractice.com](automationpractice.com)

Test Stack:

* Nightwatch
  * Selenium
* CircleCI
* Browserstack

## Minimum Versions

Only Node LTS versions are supported.

Currently, that is Node>=10.0.0

This limitation is due to Chromedriver only supporting LTS. Workarounds are available but unsupported.

For reference: [Node LTS Schedule](https://nodejs.org/en/about/releases/)

## Configuration

Sample config is located in `.env.example`

The env var `LOCATION` is included in the sample file, but does not need to be set if executed through npm scripts.

There are two location types supported. They are defined by executing on the **local** machine or executing on a **remote** machine (Browserstack)

### Local Execution

A version of Chrome browser that is supported by the latest chromedriver is expected to be installed.

For testing other versions of Chrome/Firefox utilize the command flags which [nightwatch provides](https://nightwatchjs.org/guide/running-tests/#command-line-options).

Nightwatch settings are located in `conf/`

### Remote Execution

Recognize that LOCATION is used as a value by the scripts.

Any value in the env var `LOCAL` will cause the test to run using Browserstack's tunnel. This project does **NOT** currently check truthiness of the value.

## Development

### Page Object Model

This makes extensive use of Nighwatch's [Page Objects](https://nightwatchjs.org/guide/working-with-page-objects/). Additional API details are on [github](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API).

It is important to note that the Page Object api does not include the full Browser/Client api.

### Tools used

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

### CI

Circle CI run ALL builds in a Node:dubnium alpine container.

The CI build uses `npm ci` and `npm run ci`

Changes to build settings should always be predefined in the `conf/` files and `package.json` file

## License

MIT

## Resources Used

[BBC](https://github.com/bbc/nightwatch-starter/tree/master/setup_files)
