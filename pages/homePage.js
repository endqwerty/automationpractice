module.exports = {
  // can be string or function
  url: function () {
    return this.api.launchUrl
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
