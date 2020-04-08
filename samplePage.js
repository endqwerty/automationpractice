const merge = require('lodash/merge')
const basePage = require('./basePage')

module.exports = merge(basePage, {
  url: function () {
    return this.api.launch_url // can be string or function
  },
  elements: {},
  commands: [{}],
  props: {},
  sections: {
    section1: {
      selector: '0',
      elements: {},
      commands: [
        {
          doSomething: function () {
            this.api.pause(10)
          },
        },
      ],
      props: {},
    },
  },
})
