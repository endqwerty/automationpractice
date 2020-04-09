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

A version of Chrome browser that is supported by the latest chromedriver is expected to be installed. For additional notes, check the [chromedriver docs](https://www.npmjs.com/package/chromedriver).

## Quickstart

After cloning the repo and ensuring that you have the requisite node version and a recent version of Chrome, execute `npm install` and `npm run local`

## Configuration

Sample config is located in `.env.example`. The environment variables you will need to have set depends on the location you wish to run the project at.

The env var `LOCATION` is included in the sample file, but does not need to be set if executed through npm scripts.

There are two location types supported. They are defined by executing on the **local** machine or executing on a **remote** machine (Browserstack).

### Nightwatch configuration

Nightwatch settings are located in `conf/`. The bulk of the settings are located in `conf/common.conf.js` while some location specific settings are in the conf files named for the location.

Common items such as Browser version, OS version, Browser Window size, etc are all cofigured here.

A full list of configuration options are in the [nightwatch docs](https://nightwatchjs.org/gettingstarted/configuration/#nightwatch-json).

For additional customization options utilize the command flags which [nightwatch provides](https://nightwatchjs.org/guide/running-tests/#command-line-options)

### Remote Execution

Recognize that the env var `LOCATION` is used as a value by the scripts.

Remote execution requires the values `BROWSERSTACK_ACCESS_KEY` and `BROWSERSTACK_USERNAME` to be set.

## Development

* Use a Node LTS version
* Follow Prettier/ESLint rules
* Do NOT use array functions. (is not 100% compatible with Nightwatch)
* Use camelCase

### Page Object Model

This makes extensive use of Nighwatch's [Page Objects](https://nightwatchjs.org/guide/working-with-page-objects/). Additional API details are on [github](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API).

It is important to note that the Page Object api does not include the full Browser/Client api.

Specific to the website automationpractice.com, this project uses the structure and pattern of:

```txt
|pages/
|-- <groups of similar pages>/
    |-- xyz1Page.js             - imports sections such as header, footer, auth, etc
    |__ xyz2Page.js
|-- sections/                   - Contains sections such as header, footer
    |-- sharedSection.js
    |__ testSection.js
|__ homePage.js                  - imports sections such as header, footer
```

As we do not have the source code for the project behind automationpractice.com, these scripts are more fragile than ones that lives with the source code. However, it is possible to identify areas of shared code in the framework such as with the auth forms.

### Naming

Elements are named after their function and have a suffix describing the element type.

### Creating new tests

The [nightwatch documentation](https://nightwatchjs.org/guide/working-with-page-objects/#using-page-objects) includes most of the relevant details regarding writing tests with page objects.

### Extending Nightwatch

Custom Assertions and Custom Commands are commented out in `conf/common.conf.js` and they can be used as described by [nightwatch](https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands)

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

## Additiona Resources Used

[BBC](https://github.com/bbc/nightwatch-starter/tree/master/setup_files)
