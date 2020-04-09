module.exports = {
  '@disabled': false,

  'Purchase an item with a new account': function (browser) {
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
    const orderConfirmation = shoppingCartPage.section.orderConfirmation

    homePage.navigate()
    header.goToTShirts()
    catalogPage.addItemToCartByName('Faded Short Sleeve T-shirts')
    addedToCartPopup.checkout()
    browser.waitForElementVisible(cartSummary)
    cartSummary.checkoutCart()
    browser.waitForElementVisible(createAccount)
    createAccount.submitWithFakeEmail()
    browser.waitForElementVisible(accountInfo)
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
    browser.waitForElementVisible(address)
    address.checkoutCart()
    browser.waitForElementVisible(shipping)
    shipping.toggleTOS()
    shipping.checkoutCart()
    browser.waitForElementVisible(payment)
    payment.checkoutByBankWire()
    browser.waitForElementVisible(orderSummary)
    orderSummary.confirmOrder()
    browser.assert.visible(orderConfirmation)
  },
}
