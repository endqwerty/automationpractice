const merge = require('lodash/merge')
const baseSection = require('../sections/baseSection')
const createAuthSection = require('../sections/authSection')

module.exports = merge(
  {
    elements: {},
    commands: [],
    props: {},
    sections: {},
  },
  baseSection,
  createAuthSection
)
