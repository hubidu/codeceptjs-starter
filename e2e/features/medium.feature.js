Feature('I can go to medium.com');

Before((I) => {
  I.prepareTest();
});

Scenario('I should see news articles on the home page', function (I){
  I.amOnPage('http://www.medium.com/');
  I.waitForElement('.metabar');
  I.click('Sign up', '.button.button--primary');

  within('.buttonSet', function () {
    I.see('Continue with Google');
    I.click('Sign in or sign up with email', '.button');
  });
});
