import { test,expect } from '../fixtures/baseFixture';
import testData   from '../test-data/ui/logindata.json';

test('Valid Login', async ({ loginPage }) => {


    await loginPage.openLoginPage();

    await loginPage.login(
       testData.validUsers[0].email,
        testData.validUsers[0].password
    );
await expect(loginPage.logoutlink).toBeVisible();


});