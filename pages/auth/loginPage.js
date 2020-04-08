const merge = require('lodash/merge')
const baseSection = require('../sections/baseSection')
const authSection = require('../sections/authSection')

module.exports = merge(
  {
    url: 'http://automationpractice.com/index.php?controller=authentication',
    elements: {},
    commands: [],
    props: {},
    sections: {},
  },
  baseSection,
  authSection
)
