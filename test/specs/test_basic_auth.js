const BasicAuthPage = require('../pageobjects/basic_auth.page');

describe('basic authentication functionality', () => {
        it('should basic auth login with basic credentials'), async () => {
            await BasicAuthPage.openBasicAuth("admin", "admin");
            await expect(BasicAuthPage.getCongratulations).toBeExisting();
            await expect(BasicAuthPage.getHeader).toHaveText("Basic Auth");
        }

    it('should basic auth login with invalid username'), async () => {
        await BasicAuthPage.openBasicAuth("admiM", "admin");
        await expect(BasicAuthPage.getNotAuthorized).toBeExisting();
    }
    it('should basic auth login with invalid password'), async () => {
        await BasicAuthPage.openBasicAuth("admin", "admiM");
        await expect(BasicAuthPage.getNotAuthorized).toBeExisting();
    }
    }
)