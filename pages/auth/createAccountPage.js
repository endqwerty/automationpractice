const merge = require('lodash/merge')
const basePage = require('../basePage')

module.exports = merge(basePage, {
  elements: {},
  commands: [],
  props: {},
  sections: {
    accountInfo: {
      selector: 'form#account-creation_form',
      elements: {
        titleMr: 'input#id_gender1',
        titleMrs: 'input#id_gender2',
        customerFirstName: 'input#customer_firstname',
        customerLastName: 'input#customer_lastname',
        password: 'input#passwd',
        addressFirstName: 'input#firstname',
        addressLastName: 'input#lastname',
        addressRow1: 'input#address1',
        addressRow2: 'input#address2',
        addressCity: 'input#city',
        addressState: 'select#id_state',
        addressPostCode: 'input#postcode',
        addressCountry: 'select#id_country',
        addressPhone: 'input#phone_mobile',
        addressAlias: 'input#alias',
        submitButton: 'button#submitAccount',
      },
      commands: [
        {
          fillInMinimum: function (
            firstName,
            lastName,
            password,
            address,
            city,
            state,
            postCode,
            country,
            phone
          ) {
            return this.setValue('@customerFirstName', firstName)
              .setValue('@customerLastName', lastName)
              .setValue('@password', password)
              .setValue('@addressRow1', address)
              .setValue('@addressCity', city)
              .setValue('@addressState', state)
              .setValue('@addressPostCode', postCode)
              .setValue('@addressCountry', country)
              .setValue('@addressPhone', phone)
          },
          clickSubmit: function () {
            return this.click('@submitButton')
          },
        },
      ],
    },
  },
})
