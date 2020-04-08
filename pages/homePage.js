module.exports = {
  // can be string or function
  url: function () {
    return 'http://www.automationpractice.com'
  },
  elements: {},
  commands: [],
  props: {},
  sections: {
    header: {
      selector: '#header',
      locateStrategy: 'css selector',
      elements: {
        loginButton: '.login',
      },
      commands: [
        {
          goToLogin: function () {
            return this.click('@loginButton')
          },
        },
      ],
    },
    body: {
      selector: '#columns',
      locateStrategy: 'css selector',
      elements: {
        cart: '.shopping_cart',
        womenButton: 'li>a[title="Women"]',
        dressesButton: 'li>a[title="Dresses"]',
        tShirtsButton: 'li>a[title="T-shirts"]',
      },
    },
    footer: {
      selector: '#footer',
      locateStrategy: 'css selector',
      elements: {
        myLogo: {
          selector: '.my-logo',
          locateStrategy: 'css selector',
        },
      },
    },
  },
}
