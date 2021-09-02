const BasicAuthPage = require('../pageobjects/basic_auth.page');

async function extracted(username, password, urlBasicAuth) {
    await BasicAuthPage.openBasicAuth(username, password);
    if (!await BasicAuthPage.isDisplayed("div p")) {  //css selector $('div p')
        if (!await BasicAuthPage.isDisplayed("..")) { //xPath $('//body') or $('..')
            await browser.sendKeys(username);
            await browser.keys("\uE004");
            await browser.sendKeys(password);
            await browser.keys("\uE007");
            expect(browser.getUrl).toHaveUrlContaining(urlBasicAuth);
            expect(BasicAuthPage.getNotAuthorized).toBeDisplayed();
        }
    }
}

describe('basic authentication functionality', () => {
        const urlBasicAuth = "https://the-internet.herokuapp.com/basic_auth";
        it('should basic auth login with valid credentials', async () => {
            await BasicAuthPage.openBasicAuth("admin", "admin");
            await driver.waitUntil((BasicAuthPage.getHeader).isDisplayed);
            await expect(BasicAuthPage.getCongratulations).toHaveTextContaining("Congratulations!");
            await expect(BasicAuthPage.getHeader).toHaveText("Basic Auth");
            expect(browser.getUrl).toHaveUrlContaining(urlBasicAuth);
        });

        it("shouldn't basic auth login with invalid username", async () => {

            await extracted("admiM", "admin", urlBasicAuth);
        });

        it("shouldn't basic auth login with invalid password", async () => {
            await extracted("admin", "admiM", urlBasicAuth);
        });
    }
)