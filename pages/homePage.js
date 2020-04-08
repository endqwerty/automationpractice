const merge = require('lodash/merge')
const basePage = require('./basePage')

module.exports = merge(basePage, {
  url: 'http://www.automationpractice.com',
  elements: {},
  commands: [],
  props: {},
  sections: {},
})
