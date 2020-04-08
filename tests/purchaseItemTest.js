module.exports = {
  '@disabled': false,

  'Purchase a new item': function (browser) {
    const homePage = browser.page.homePage()
    const catalogPage = browser.page.catalogPage()
    const addedToCartPopup = catalogPage.section.addedToCartPopup
    const currentTimestamp = new Date().getTime()
    homePage
      .navigate()
      .assert.visible(homePage.section.header)
      .section.header.goToTShirts()
    catalogPage
      .addItemToCartByName('Faded Short Sleeve T-shirts')
      .assert.visible(addedToCartPopup)
    addedToCartPopup.checkout()
    browser.pause()
  },
}
