module.exports = {
    '@disabled': false,

    'Find new account page': function (browser) {
        browser
            .url('http://www.automationpractice.com')
            .waitForElementPresent('.login')
            .click('.login')
            .waitForElementPresent('#SubmitCreate')
            .setValue('input#email_create', 'test+4@mail.com')
            .click('#SubmitCreate')
            .assert.not.visible('#create_account_error')
            .waitForElementPresent('.account_creation')
    },
    'Add user details': function (browser) {
        browser
            .setValue('input#customer_firstname', 'Daniel')
            .setValue('input#customer_lastname', 'Yang')
            .setValue('input#passwd', 'P@ssw0rd!!!')
            // .setValue('input#firstname', 'Daniel')
            // .setValue('input#lastname', 'Yang')
            .setValue('input#address1', '13 Cloverfield Ln')
            .setValue('input#city', 'Seattle')
            .setValue('select#id_state', 'Washington')
            .setValue('input#postcode', '12345')
            .setValue('select#id_country', 'United States')
            .setValue('input#phone_mobile', '1238675309')
    },
    'Submit new account': function (browser) {
        browser
            .click('button#submitAccount')
            .waitForElementPresent('body#my-account')
    },
}
