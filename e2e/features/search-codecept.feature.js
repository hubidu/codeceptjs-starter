Feature('@Google @important I can search for codeceptjs on google');


Before((I, googleSearchPage) => {
  I.prepareTest();
  googleSearchPage.goto();
})

Scenario('I type codeceptjs in the search input and press enter', (googleSearchPage) => {
  googleSearchPage.enter('codeceptjs');
  googleSearchPage.showsCodeceptAsFirstResult();
})
