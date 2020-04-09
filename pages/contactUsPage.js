const merge = require('lodash.merge')
const baseSection = require('./sections/baseSection')

module.exports = merge(
  {
    elements: {},
    commands: [{}],
    props: {},
    sections: {
      contactUs: {
        selector:
          '//*[@id="center_column"] [//h1[contains(text(),"Contact us")]]',
        locateStrategy: 'xpath',
        elements: {
          subjectSelector: 'select#id_contact',
          emailInput: 'input#email',
          orderReferenceInput: 'input#id_order',
          messageTextArea: 'textarea#message',
          sendButton: 'button#submitMessage',
          successAlert: 'p.alert-success',
        },
        commands: [
          {
            sendWebmasterMessageWithFakeEmail: function (text) {
              return this.setValue('@subjectSelector', 'Webmaster')
                .setValue(
                  '@emailInput',
                  'test+' + new Date().getTime() + '@mail.com'
                )
                .setValue('@messageTextArea', text)
                .click('@sendButton')
            },
            checkMessageSentSuccess: function () {
              return this.assert.visible('@successAlert')
            },
          },
        ],
      },
    },
  },
  baseSection
)
