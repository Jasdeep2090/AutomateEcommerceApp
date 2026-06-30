import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    readonly productsMenu: Locator;
    readonly allProductsHeading: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly firstViewProduct: Locator;
    readonly firstAddToCart: Locator;
    readonly continueShopping: Locator;
    readonly viewCart: Locator;
    readonly productNames:Locator;

    constructor(page: Page) {
        super(page);

        this.productsMenu = page.locator('a[href="/products"]');
        this.allProductsHeading = page.getByText('All Products');
        this.searchBox = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');

        this.firstViewProduct = page.locator('a[href="/product_details/1"]');

        this.firstAddToCart = page.locator('.add-to-cart').first();

        this.continueShopping = page.getByRole('button', {
            name: 'Continue Shopping'
        });

        this.viewCart = page.getByText('View Cart');
         this.productNames = page.locator('.productinfo p');
    }

    async openProductsPage() {
        await this.navigate('/');
        await this.productsMenu.click();
    }

    async verifyProductsPage() {
        await expect(this.allProductsHeading).toBeVisible();
    }

    async openFirstProduct() {
        await this.firstViewProduct.click();
    }

    async verifyProductDetails() {
        await expect(this.page).toHaveURL(/product_details/);
    }

    async searchProduct(product: string) {
        await this.searchBox.fill(product);
        await this.searchButton.click();
    }

   async verifySearchResult(product: string) {
    await expect(
        this.productNames.filter({ hasText: product }).first()
    ).toBeVisible();
}
    async addFirstProductToCart() {
        await this.firstAddToCart.click();
    }

    async openCart() {
        await this.viewCart.click();
    }

}