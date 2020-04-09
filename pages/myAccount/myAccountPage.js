const merge = require('lodash.merge')
const baseSection = require('../sections/baseSection')

module.exports = merge(
  {
    elements: {},
    commands: [],
    props: {},
    sections: {
      accountInfo: {
        selector: '//div[h1]',
        locateStrategy: 'xpath',
        elements: {
          titleMr: 'input#id_gender1',
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
  },
  baseSection
)
