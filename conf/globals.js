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
var request = require('request')

var options = {
    url: 'https://api.browserstack.com/automate/builds.json?status=running',
    auth: {
        user: process.env.BROWSERSTACK_USERNAME,
        pass: process.env.BROWSERSTACK_ACCESS_KEY,
    },
}

module.exports = {
    // Global settings
    waitForConditionTimeout: 10000, // time in ms

    // screenshot visual regression options
    visual_regression_settings: {
        latest_screenshots_path:
            'screenshots/' + process.env.LOCATION + '/latest',
        latest_suffix: '',
        baseline_screenshots_path:
            'screenshots/' + process.env.LOCATION + '/baseline',
        baseline_suffix: '',
        diff_screenshots_path: 'screenshots/' + process.env.LOCATION + '/diff',
        diff_suffix: '',
        threshold: 0,
        prompt: false,
        always_save_diff_screenshot: false,
    },

    // Things to do before all tests
    before: function (done) {
        done()
    },

    // Things to do at the start of each test
    beforeEach: function (browser, done) {
        // If using Browserstack, show the build/session id in the console, so we can quickly go to it
        if (process.env.LOCATION == 'remote') {
            request(options, function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    builds = JSON.parse(body)
                    builds.forEach(function (item) {
                        if (
                            item.automation_build.name ==
                            browser.options.desiredCapabilities.build
                        ) {
                            console.log(
                                'https://automate.browserstack.com/builds/' +
                                    item.automation_build.hashed_id +
                                    '/sessions/' +
                                    browser.sessionId
                            )
                        }
                    })
                }
            })
        }
        done()
    },

    // Things to do after all tests
    after: function (done) {
        done()
    },

    // Things to do after each test
    afterEach: function (browser, done) {
        // Ensure the browser closed
        browser.end()
        done()
    },
}
