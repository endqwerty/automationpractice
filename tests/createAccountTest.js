module.exports = {
  '@disabled': false,

  'Find new account page': function (browser) {
    const homePage = browser.page.homePage()
    const loginPage = browser.page.auth.loginPage()
    const createAccountPage = browser.page.auth.createAccountPage()
    const myAccountPage = browser.page.myAccount.myAccountPage()
    const currentTimestamp = new Date().getTime()
    const fakeEmail = 'test+' + currentTimestamp + '@mail.com'
    homePage.navigate()
    homePage.assert.visible(homePage.section.header).section.header.goToLogin()
    loginPage.assert
      .visible(loginPage.section.createAccount)
      .section.createAccount.submitNewEmail(fakeEmail)
    createAccountPage.assert
      .visible(createAccountPage.section.accountInfo)
      .section.accountInfo.fillInMinimum(
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
    myAccountPage.assert.visible(myAccountPage.section.accountInfo)
  },
}
