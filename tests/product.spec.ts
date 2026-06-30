import { test,expect } from '../fixtures/baseFixture';
import productData   from '../test-data/ui/productData.json';


test.describe('Product Module', () => {

    test('TC_01 Verify Products page', async ({ productPage }) => {

        await productPage.openProductsPage();

        await productPage.verifyProductsPage();

    });

    test('TC_02 Verify Product Details', async ({ productPage }) => {

        await productPage.openProductsPage();

        await productPage.openFirstProduct();

        await productPage.verifyProductDetails();

    });

    test.only('TC_03 Verify Search Product', async ({ productPage }) => {

        await productPage.openProductsPage();

        await productPage.searchProduct(productData.searchProduct);

        await productPage.verifySearchResult(
            productData.searchProduct
        );

    });

    // test('TC_04 Verify Add Product To Cart', async ({ productPage, cartPage }) => {

    //     await productPage.openProductsPage();

    //     await productPage.addFirstProductToCart();

    //     await productPage.openCart();

    //     await cartPage.verifyProductAdded();

    // });

});