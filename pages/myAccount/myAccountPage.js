const merge = require('lodash.merge')
const baseSection = require('../sections/baseSection')

module.exports = merge(
  {
    elements: {},
    commands: [],
    props: {},
    sections: {
      accountInfo: {
        selector: 'body#my-account',
        elements: {},
        commands: [{}],
      },
    },
  },
  baseSection
)
