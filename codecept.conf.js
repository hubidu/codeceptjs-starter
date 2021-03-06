const config = require('config');

exports.config = {
  "tests": "./e2e/**/*.feature.js",
  "timeout": 20000,
  "output": "./output",
  "helpers": {
    "WebDriverIO": {
      "url": config.url,
      "waitForTimeout": 20000,
      "browser": "phantom"
    },

    /**
     * Someday I would like to use nightmare
     * Currently waitForElement does not seem to work correctly
     */
    /*
    "Nightmare": {
      "url": config.url,
      "show": true,
      "waitForAction": 1,
      "waitTimeout": 5000
    }
    */

    "RESTHelper": {
      "require": "./e2e/helpers/rest.helper.js"
    },
    "CookieHelper": {
      "require": "./e2e/helpers/cookie.helper.js"
    }
  },
  "include": {
    "I": "./e2e/custom.steps.js",
    "googleSearchPage": "./e2e/pages/google-search.page.js"
  },
  "mocha": {},
  "bootstrap": false,
  "name": "CodeceptJS Test Suite"
}
