const merge = require('lodash/merge')
const basePage = require('./basePage')

module.exports = merge(basePage, {
  elements: {},
  commands: [{}],
  props: {},
  sections: {},
})
