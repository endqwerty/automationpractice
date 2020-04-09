/**
 * MIT License

Copyright (c) 2018 Salvador Molina Moreno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

require('dotenv').config()

// Declare a common configuration which can be used on all the subsequent configurations of nightwatch
const nightwatch_config = {
  src_folders: ['tests'],
  page_objects_path: ['pages'],
  globals_path: 'globals.js',
  // custom_commands_path: ['commands'],
  // custom_assertions_path: ['assertions'],

  webdriver: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 443,
    default_path_prefix: '/wd/hub',
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'screenshots/' + process.env.LOCATION + '/failures',
      },
      javascriptEnabled: true,
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        build:
          process.env.BROWSERSTACK_USERNAME +
          '-' +
          process.env.ENV +
          '-' +
          process.env.npm_package_name +
          '-nightwatchjs-' +
          new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }) +
          ' ' +
          new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }),
        project: process.env.npm_package_name + '-Nightwatch',
        'browserstack.user':
          process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
        'browserstack.key':
          process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
        'browserstack.debug': true,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'Chrome',
        os: 'Windows',
        os_version: '7',
        resolution: '1600x1200',
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'Firefox',
        os: 'Windows',
        os_version: '7',
        resolution: '1600x1200',
      },
    },
    edge: {
      desiredCapabilities: {
        browserName: 'Edge',
        os: 'Windows',
        os_version: '10',
        resolution: '1600x1200',
      },
    },
  },
}

module.exports = nightwatch_config
