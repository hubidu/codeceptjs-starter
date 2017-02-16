Feature('Set cookies')

Scenario('I can set a cookie', function* (I) {
    I.amOnPage('https://www.check24.de')
    let cookies = yield I.grabCookie()
    I.say(`Got cookies ${cookies.length}`)
    I.say(`Got cookies ${cookies[0].name} : ${cookies[0].value}`)

    I.setCookie({ name: 'wpset', domain: '.check24.de', path: '/', value: 'test' })
})

Scenario('I can use a custom helper to set a cookie', (I) => {
    I.amOnPage('https://www.check24.de')
    I.setCookieABTesting()
    I.say(`Set custom cookie`)
})