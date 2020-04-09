module.exports = {
  '@disabled': false,

  'Send a message to the webmaster': function (browser) {
    const homePage = browser.page.homePage()
    const header = homePage.section.header
    const contactUs = browser.page.contactUsPage().section.contactUs

    homePage.navigate()
    browser.waitForElementVisible(header)
    header.goToContactForm()
    browser.waitForElementVisible(contactUs)
    contactUs.sendWebmasterMessageWithFakeEmail('test fake message')
    contactUs.checkMessageSentSuccess()
  },
}
