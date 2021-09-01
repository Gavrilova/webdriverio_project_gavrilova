//work through basic authentication functionality
//get access by inserting credentials in the url 'username:password@' after https://
const Page = require('./page');

class BasicAuthPage extends Page {

    /**
     * define selectors using getter methods
     */

    get getHeader() {
        return browser.$('#h3');
    }

    get getCongratulations() {
        return browser.$('=Congratulations');
    }

    get getNotAuthorized() {
        return browser.$('=Not authorized');
    }

    openBasicAuth(username, password) {
        return super.open(username, password, "basic_auth");
    }
}

module.exports = new BasicAuthPage();
