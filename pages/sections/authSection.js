module.exports = {
  sections: {
    createAccount: {
      selector: 'form#create-account_form',
      elements: {
        email: 'input#email_create',
        submitButton: '#SubmitCreate',
        errorBox: '#create_account_error',
      },
      props: {
        fakeEmail: 'test+' + new Date().getTime() + '@mail.com',
      },
      commands: [
        {
          submitWithFakeEmail: function () {
            return this.setValue('@email', this.props.fakeEmail)
              .click('@submitButton')
              .assert.not.visible('@errorBox')
          },
        },
      ],
    },
    logIn: { selector: 'form#login_form' },
  },
}
