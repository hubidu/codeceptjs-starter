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
    I.pressKey('Enter');
  },

  showsCodeceptAsFirstResult() {
    I.waitForElement('.med')
    I.waitForElement('#res .med')
    I.waitForText('CodeceptJS');
  }
}
