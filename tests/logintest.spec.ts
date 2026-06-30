import { test,expect } from '../fixtures/baseFixture';
import testData   from '../test-data/ui/logindata.json';

test('Valid Login', async ({ loginPage }) => {


    await loginPage.openLoginPage();

    await loginPage.login(
       testData.validUsers[0].email,
        testData.validUsers[0].password
    );
await expect(loginPage.logoutLink).toBeVisible();


});

test('Login with invalid credentials', async ({loginPage}) => {
    
    await loginPage.openLoginPage();
    await loginPage.login(
       testData.invalidUsers[0].email,
        testData.invalidUsers[0].password
    );
    await expect(loginPage.errorMessage).toBeVisible();
   // await expect(loginPage.errorMessage).toHaveText(constant.LOGIN_ERROR);
    // expect(errorMessage).toBe('Your email or password is incorrect!');
});


test('Verify user can logout successfully', async ({ loginPage }) => {

    await loginPage.openLoginPage();

    await loginPage.login(
        testData.validUsers[0].email,
        testData.validUsers[0].password
    );

    await expect(loginPage.logoutLink).toBeVisible()

    await loginPage.logout();

});
