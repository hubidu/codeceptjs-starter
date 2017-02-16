
class CookieHelper extends Helper {

   setCookieABTesting () {
    const browser = this.helpers['WebDriverIO'].browser;
    return browser.cookie('post', {
        name: 'ab_resultPageCtaWording',
        value: 'a1',
        domain: '.check24.de',
        path: '/'
    });
   }

}

module.exports = CookieHelper;