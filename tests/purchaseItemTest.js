module.exports = {
  '@disabled': false,

  'Purchase a new item': function (browser) {
    const homePage = browser.page.homePage()
    const header = homePage.section.header
    const catalogPage = browser.page.catalogPage()
    const addedToCartPopup = catalogPage.section.addedToCartPopup
    const shoppingCartPage = browser.page.shoppingCartPage()
    const cartSummary = shoppingCartPage.section.cartSummary
    const createAccount = shoppingCartPage.section.createAccount
    const accountInfo = shoppingCartPage.section.accountInfo
    const address = shoppingCartPage.section.address
    const shipping = shoppingCartPage.section.shipping
    const payment = shoppingCartPage.section.payment
    const orderSummary = shoppingCartPage.section.orderSummary

    homePage.navigate()
    header.goToTShirts()
    catalogPage.addItemToCartByName('Faded Short Sleeve T-shirts')
    addedToCartPopup.checkout()
    cartSummary.checkoutCart()
    createAccount.submitWithFakeEmail()
    accountInfo
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
    address.checkoutCart()
    shipping.toggleTOS()
    shipping.checkoutCart()
    payment.checkoutByBankWire()
    orderSummary.confirmOrder()
    browser.pause()
  },
}
