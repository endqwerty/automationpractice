module.exports = {
  '@disabled': false,

  'Navigate to www.automationpractice.com': function (browser) {
    browser
      .url('http://www.automationpractice.com')
      .waitForElementPresent('body', 1000)
  },

  'find login': function (browser) {
    browser.assert.containsText('.login', 'Sign in')
  },
}
