module.exports = {
  // can be string or function
  url: function () {
    return 'http://automationpractice.com/index.php?controller=authentication'
  },
  elements: {},
  commands: [],
  // object version (best considered immutable)
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
}
