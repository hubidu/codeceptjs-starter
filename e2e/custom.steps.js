const config = require('config');

const I = actor();


module.exports = function() {
  return actor({
    // TODO: Put global helper functions here

    /**
     * Test preparation: Clear cookies and set browser window size
     */
    prepareTest: () => {
      I.clearCookie();
      // TODO: Test with different screen sizes using an environment variable?
      I.resizeWindow(1900, 768);
    },

  });
}
