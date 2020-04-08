module.exports = {
  // can be string or function
  url: function () {
    return this.api.launchUrl
  },
  elements: {},
  commands: [],
  // object version (best considered immutable)
  props: {},

  sections: {
    createAccount: {
      selector: 'form#create-account_form',
    },
    logIn: { selector: 'form#login_form' },
  },
}
