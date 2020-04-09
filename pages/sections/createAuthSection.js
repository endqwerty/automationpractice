module.exports = {
  sections: {
    accountInfo: {
      selector: 'form#account-creation_form',
      elements: {
        titleMrRadio: 'input#id_gender1',
        titleMrsRadio: 'input#id_gender2',
        customerFirstNameInput: 'input#customer_firstname',
        customerLastNameInput: 'input#customer_lastname',
        passwordInput: 'input#passwd',
        addressFirstNameInput: 'input#firstname',
        addressLastNameInput: 'input#lastname',
        addressRow1Input: 'input#address1',
        addressRow2Input: 'input#address2',
        addressCityInput: 'input#city',
        addressStateSelect: 'select#id_state',
        addressPostCodeInput: 'input#postcode',
        addressCountrySelect: 'select#id_country',
        addressPhoneInput: 'input#phone_mobile',
        addressAliasInput: 'input#alias',
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
            return this.setValue('@customerFirstNameInput', firstName)
              .setValue('@customerLastNameInput', lastName)
              .setValue('@passwordInput', password)
              .setValue('@addressRow1Input', address)
              .setValue('@addressCityInput', city)
              .setValue('@addressStateSelect', state)
              .setValue('@addressPostCodeInput', postCode)
              .setValue('@addressCountrySelect', country)
              .setValue('@addressPhoneInput', phone)
          },
          clickSubmit: function () {
            return this.click('@submitButton')
          },
        },
      ],
    },
  },
}
