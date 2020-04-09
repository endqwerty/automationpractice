module.exports = {
  sections: {
    createAccount: {
      selector: 'form#create-account_form',
      elements: {
        emailInput: 'input#email_create',
        submitButton: '#SubmitCreate',
        errorAlert: '#create_account_error',
      },
      props: {
        // fakeEmail: 'test+' + new Date().getTime() + '@mail.com',
      },
      commands: [
        {
          submitWithFakeEmail: function () {
            return this.setValue(
              '@emailInput',
              'test+' + new Date().getTime() + '@mail.com'
            )
              .click('@submitButton')
              .waitForElementNotPresent('@errorAlert')
          },
        },
      ],
    },
    logIn: { selector: 'form#login_form' },
  },
}
