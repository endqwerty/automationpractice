const merge = require('lodash/merge')
const baseSection = require('./sections/baseSection')
const authSection = require('./sections/authSection')
const createAuthSection = require('./sections/createAuthSection')

module.exports = merge(
  {
    elements: {},
    commands: [{}],
    props: {},
    sections: {
      cartSummary: {
        selector:
          '//*[@id="center_column"] [//h1[contains(text(),"Shopping-cart summary")]]',
        locateStrategy: 'xpath',
        elements: {
          checkoutButton: '.cart_navigation a[title="Proceed to checkout"]',
        },
        commands: [
          {
            checkoutCart: function () {
              return this.click('@checkoutButton')
            },
          },
        ],
      },
      address: {
        selector:
          '//*[@id="center_column"] [//h1[contains(text(),"Addresses")]]',
        locateStrategy: 'xpath',
        elements: {
          checkoutButton: '.cart_navigation button[name="processAddress"]',
        },
        commands: [
          {
            checkoutCart: function () {
              return this.click('@checkoutButton')
            },
          },
        ],
      },
      shipping: {
        selector:
          '//*[@id="center_column"] [//h1[contains(text(),"Shipping")]]',
        locateStrategy: 'xpath',
        elements: {
          tosCheckbox: 'input[name="cgv"]',
          checkoutButton: '.cart_navigation button[name="processCarrier"]',
        },
        commands: [
          {
            toggleTOS: function () {
              return this.click('@tosCheckbox')
            },
            checkoutCart: function () {
              return this.click('@checkoutButton')
            },
          },
        ],
      },
      payment: {
        selector:
          '//*[@id="center_column"] [//h1[contains(text(),"payment method")]]',
        locateStrategy: 'xpath',
        elements: {
          bankWireButton: 'a.bankwire',
          checkButton: 'a.cheque',
        },
        commands: [
          {
            checkoutByCheck: function () {
              return this.click('@checkButton')
            },
            checkoutByBankWire: function () {
              return this.click('@bankWireButton')
            },
          },
        ],
      },
      orderSummary: {
        selector:
          '//*[@id="center_column"] [//h1[contains(text(),"Order summary")]]',
        locateStrategy: 'xpath',
        elements: {
          confirmButton: '.cart_navigation button',
        },
        commands: [
          {
            confirmOrder: function () {
              return this.click('@confirmButton')
            },
          },
        ],
      },
    },
  },
  baseSection,
  authSection,
  createAuthSection
)
