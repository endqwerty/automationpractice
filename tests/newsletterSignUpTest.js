module.exports = {
  '@disabled': false,

  'sign up for the newsletter': function (browser) {
    const homePage = browser.page.homePage()
    const mainContent = homePage.section.mainContent
    const footer = homePage.section.footer

    homePage.navigate()
    browser.waitForElementVisible(footer)
    footer.subscribeToNewsletterWithFakeEmail()
    mainContent.checkSubscriptionSuccess()
  },
}
