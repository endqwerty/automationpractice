const merge = require('lodash.merge')
const baseSection = require('./sections/baseSection')

module.exports = merge(
  {
    url: 'http://www.automationpractice.com',
    elements: {},
    commands: [],
    props: {},
    sections: {
      mainContent: {
        selector: 'div#columns',
        elements: { successAlert: 'p.alert-success' },
        commands: {},
      },
    },
  },
  baseSection
)
