Feature('@Yahoo @important I can search for codeceptjs on yahoo');


Before((I) => {
  I.prepareTest();
});

Scenario('I can go to yahoo', (I) => {
  I.amOnPage('http://www.yahoo.com')
  I.seeInCurrentUrl('yahoo.com')
})

Scenario('I can search for codeceptjs and get CodeceptJS as the first result', (I) => {
  I.amOnPage('http://www.yahoo.com')
  I.waitForElement('input#UHSearchBox')
  I.fillField('input#UHSearchBox', 'codeceptjs')
  I.pressKey('Enter')
  I.waitForElement('.searchCenterMiddle')
  I.waitForText('CodeceptJS', 5, '.searchCenterMiddle')
  I.seeInTitle('codeceptjs')
})
