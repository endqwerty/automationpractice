module.exports = {
  sections: {
    header: {
      selector: '#header',
      locateStrategy: 'css selector',
      elements: {
        loginButton: '.login',
        cart: '.shopping_cart',
        womenMenu: 'div>ul>li>a[title="Women"]',
        dressesMenu: 'div>ul>li>a[title="Dresses"]',
        casualDressesItem:
          'div>ul>li>a[title="Dresses"]>li>a[title="Casual Dresses"]',
        eveningDressesItem:
          'div>ul>li>a[title="Dresses"]>li>a[title="Evening Dresses"]',
        summerDressesItem: 'li>a[title="Summer Dresses"]',
        tShirtsMenu: 'div>ul>li>a[title="T-shirts"]',
      },
      commands: [
        {
          goToLogin: function () {
            return this.click('@loginButton')
          },
          goToCasualDresses: function () {
            return this.moveToElement('@dressesMenu', 1, 1)
              .moveToElement('@casualDressesItem', 1, 1)
              .click('@casualDressesItem')
          },
          goToTShirts: function () {
            return this.moveToElement('@tShirtsMenu', 1, 1).click(
              '@tShirtsMenu'
            )
          },
        },
      ],
    },
    footer: {
      selector: '#footer',
      locateStrategy: 'css selector',
      elements: {
        newsletterInput: 'input#newsletter-input',
        newsletterSubmitButton: 'button[name="submitNewsletter"]',
      },
      commands: [
        {
          subscribeToNewsletterWithFakeEmail: function () {
            return this.setValue(
              '@newsletterInput',
              'test+' + new Date().getTime() + '@mail.com'
            ).click('@newsletterSubmitButton')
          },
        },
      ],
    },
  },
}
