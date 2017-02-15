Feature('I can use the absolutenet page');

Before((I) => {
  I.prepareTest();
});

Scenario('I can go to the home page', function* (I) {
  I.say('Demo the I.grabXXX method')
  I.amOnPage('http://www.absolutenet.com/');
  let title = yield I.grabTitle();
  // console.info(title);
  I.say('Of course this will fail the test')
  I.see('bogus text that is not there'); //this should give an error and not success.
});
