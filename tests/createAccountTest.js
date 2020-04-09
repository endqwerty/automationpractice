module.exports = {
  '@disabled': false,

  'Create a new account': function (browser) {
    const homePage = browser.page.homePage()
    const header = homePage.section.header
    const loginCreateAccount = browser.page.auth.loginPage().section
      .createAccount
    const createAccountInfo = browser.page.auth.createAccountPage().section
      .accountInfo
    const myAccountInfo = browser.page.myAccount.myAccountPage().section
      .accountInfo

    homePage.navigate()
    browser.waitForElementVisible(header)
    header.goToLogin()
    browser.waitForElementVisible(loginCreateAccount)
    loginCreateAccount.submitWithFakeEmail()
    browser.waitForElementVisible(createAccountInfo)
    createAccountInfo
      .fillInMinimum(
        'Daniel',
        'Yang',
        'P@ssw0rd!!!',
        '13 Cloverfield Ln',
        'New York City',
        'New York',
        '12345',
        'United States',
        '1238675309'
      )
      .clickSubmit()
    browser.assert.visible(myAccountInfo)
  },
}
