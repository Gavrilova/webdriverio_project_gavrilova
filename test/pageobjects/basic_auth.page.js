//work through basic authentication functionality
//get access by inserting credentials in the url 'username:password@' after https://
const Page = require('./page');

class BasicAuthPage extends Page {

    /**
     * define selectors using getter methods
     */

    get getHeader() {
        return browser.$('h3'); //css selector $('h3')
    }

    get getCongratulations() {
        return browser.$('div p');//$('*=Congratulations!');
    }

    get getNotAuthorized() {
        return browser.$('=Not authorized');
    }

    async isDisplayed(selector) {
        let result;
        try {
            await browser.$(selector);
            result = true;
        } catch (error) {
            console.error(error);
            result = false;
        }
        return result;
    }

    openBasicAuth(username, password) {
        return super.openBasicAuth(username, password, "basic_auth");
    }

    async enterKeysToBasicAuthScheme(username, password) {
        await browser.sendKeys(username);
        await browser.keys("\uE004");
        await browser.sendKeys(password);
        await browser.keys("\uE007");
    }
}

module.exports = new BasicAuthPage();
