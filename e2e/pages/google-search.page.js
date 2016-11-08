'use strict';
let I;

module.exports = {
  _init() {
    I = actor();
  },

  goto() {
    I.amOnPage('https://www.google.de');
  },

  enter(text) {
    I.fillField('q', text);
    I.click('button.lsb');
  },

  showsCodeceptAsFirstResult() {
    I.waitForElement('#rso');
    I.see('CodeceptJS', '#rso > div > div:nth-child(1) > div > h3')
  }
}
