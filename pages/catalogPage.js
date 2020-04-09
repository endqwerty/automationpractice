const util = require('util')
const merge = require('lodash.merge')
const baseSection = require('./sections/baseSection')

module.exports = merge(
  {
    elements: {
      itemPopup: '#layer_cart',
      itemByName: 'a[title="%s"]',
      addToCartButton: 'a[title="Add to cart"]',
    },
    commands: [
      {
        addItemToCartByName: function (itemName) {
          const formattedItemName = this.props.stringFormattedElement(
            this.elements.itemByName,
            itemName
          )
          return this.waitForElementVisible(formattedItemName)
            .moveToElement(formattedItemName, 0, 0)
            .waitForElementVisible('@addToCartButton')
            .click('@addToCartButton')
        },
        addSelectedItemToCart: function () {
          return this.waitForElementVisible()
        },
      },
    ],
    props: {
      stringFormattedElement: function (element, text) {
        return util.format(element.selector, text)
      },
    },
    sections: {
      addedToCartPopup: {
        selector: 'div#layer_cart',
        locateStrategy: 'css selector',
        elements: {
          continueShoppingButton: '*[title="Continue shopping"]',
          checkoutButton: '*[title="Proceed to checkout"]',
          closePopupButton: '*[title="Close window"]',
        },
        commands: [
          {
            checkout: function () {
              return this.click('@checkoutButton')
            },
          },
        ],
      },
    },
  },
  baseSection
)
