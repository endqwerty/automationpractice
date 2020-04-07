#!/usr/bin/env node

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

var Nightwatch = require('nightwatch')
var browserstack = require('browserstack-local')
var bs_local

try {
  process.mainModule.filename = './node_modules/nightwatch/bin/nightwatch'
  // Code to start browserstack local before start of test
  console.log('Connecting locally...')
  Nightwatch.bs_local = bs_local = new browserstack.Local()
  bs_local.start(
    { key: process.env.BROWSERSTACK_ACCESS_KEY, force: 'true' },
    function (error) {
      if (error) throw error

      console.log('Connected. Now testing...')
      Nightwatch.cli(function (argv) {
        Nightwatch.CliRunner(argv)
          .setup(null, function () {
            // Code to stop browserstack local after end of parallel test
            bs_local.stop(function () {})
          })
          .runTests(function () {
            // Code to stop browserstack local after end of single test
            bs_local.stop(function () {})
          })
      })
    }
  )
} catch (ex) {
  console.log('There was an error while starting the test runner:\n\n')
  process.stderr.write(ex.stack + '\n')
  process.exit(2)
}
