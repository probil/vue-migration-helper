'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bVue\s*\.\s*directive\s*\(\s*['"`]on['"`]\s*\)\s*\.\s*keyCodes\b/,
  warning: function (match) {
    return {
      reason: 'Vue.config.keyCodes is the new, more direct way to define custom keyCodes',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green('Vue.config.keyCodes')
      ),
      docsHash: 'keyCodes'
    }
  }
}
