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
// Read in the common nightwatch configuration
const nightwatch_config = require('./common.conf')

Object.assign(nightwatch_config.webdriver, {
  start_process: true,
  server_path: 'node_modules/.bin/chromedriver',
  host: '127.0.0.1',
  port: 9515,
  default_path_prefix: '',
})

nightwatch_config.test_workers = false

Object.assign(nightwatch_config.test_settings.default, {
  browserName: 'chrome',
  desiredCapabilities: {
    acceptSslCerts: true,
    acceptInsecureCerts: true,
    chromeOptions: {
      args: ['incognito', 'window-size=1366,768'],
    },
  },
})

// Code to support common capabilites
if (process.env.CHROME_HEADLESS) {
  nightwatch_config.test_settings.default.desiredCapabilities.chromeOptions.args.push(
    'headless',
    'disable-gpu'
  )
  console.log('\033[0m\033[1;33mRunning Chrome in headless mode')
}

module.exports = nightwatch_config
