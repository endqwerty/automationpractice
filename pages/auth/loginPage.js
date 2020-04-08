const merge = require('lodash/merge')
const basePage = require('../basePage')

module.exports = merge(basePage, {
  url: 'http://automationpractice.com/index.php?controller=authentication',
  elements: {},
  commands: [],
  props: {},
  sections: {
    createAccount: {
      selector: 'form#create-account_form',
      elements: {
        email: 'input#email_create',
        submitButton: '#SubmitCreate',
        errorBox: '#create_account_error',
      },
      commands: [
        {
          submitNewEmail: function (emailAddress) {
            return this.setValue('@email', emailAddress)
              .click('@submitButton')
              .assert.not.visible('@errorBox')
          },
        },
      ],
    },
    logIn: { selector: 'form#login_form' },
  },
})
