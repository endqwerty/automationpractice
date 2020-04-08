module.exports = {
  '@disabled': false,

  'Find new account page': function (browser) {
    const homePage = browser.page.homePage()
    const loginPage = browser.page.auth.loginPage()
    const currentTimestamp = new Date().getTime()
    const fakeEmail = 'test+' + currentTimestamp + '@mail.com'
    homePage.navigate()
    homePage.assert.visible(homePage.section.header).section.header.goToLogin()
    loginPage.assert
      .visible(loginPage.section.createAccount)
      .section.createAccount.submitNewEmail(fakeEmail)
    browser
      .waitForElementPresent('.account_creation')
      .setValue('input#customer_firstname', 'Daniel')
      .setValue('input#customer_lastname', 'Yang')
      .setValue('input#passwd', 'P@ssw0rd!!!')
      // .setValue('input#firstname', 'Daniel')
      // .setValue('input#lastname', 'Yang')
      .setValue('input#address1', '13 Cloverfield Ln')
      .setValue('input#city', 'Seattle')
      .setValue('select#id_state', 'Washington')
      .setValue('input#postcode', '12345')
      .setValue('select#id_country', 'United States')
      .setValue('input#phone_mobile', '1238675309')
      .click('button#submitAccount')
      .waitForElementPresent('body#my-account')
  },
}
