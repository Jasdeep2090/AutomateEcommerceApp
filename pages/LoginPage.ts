import { Page,expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {


      constructor(page: Page) {
        super(page);
    }

    username = this.page.locator('input[data-qa="login-email"]');
    password = this.page.locator('input[name="password"]');
    loginBtn = this.page.locator('button[data-qa="login-button"]');
    signupLoginMenu = this.page.getByText('Signup / Login') ;
     loginHeading = this.page.locator(
            'h2:has-text("Login to your account")'
        );
      logoutLink = this.page.locator('a[href="/logout"]');  
      errorMessage = this.page.getByText(
    'Your email or password is incorrect!'
);

  

     async openLoginPage() {
         await this.navigate('/');
         await this.click(this.signupLoginMenu);
         await expect(this.loginHeading).toBeVisible();
     }
    async login(user: string, pass: string) {

        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginBtn);
    }

    async logout() {
    await this.logoutLink.click();
    await expect(this.loginHeading).toBeVisible();
}
}