const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it("shouldn't login with invalid username", async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmit1', 'SuperSecretPassword!');
        await expect(LoginPage.flashAlert).toBeExisting();
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
    });
    it("shouldn't login with invalid password", async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'uperSecretPassword!');
        await expect(LoginPage.flashAlert).toBeExisting();
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });
});


