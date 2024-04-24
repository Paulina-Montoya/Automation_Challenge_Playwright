import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { ProductsPage } from '../pages/products.page.js'
import { CartPage } from '../pages/cart.page.js'

// test.describe('Product Pages', {
//     tag: '@smoke'
//   }, () => {
//     test.beforeEach(async ({ page }) => {
//         const logIn = new LoginPage(page)
//         await logIn.login('standard_user', 'secret_sauce')
//     });
//     test('...', async ({ page }) => {
//     //...
//     });
//   });

test('Open Your Cart Page Successfully', async ({ page }) => {
    //Should be a BeforeEach
    const product = new ProductsPage(page)
    const logIn = new LoginPage(page)
    const cart = new CartPage(page)
    await logIn.login('standard_user', 'secret_sauce')
    //Add Products
    //await product.addToCartButton.click()
    //await product.cartIconButton.click()
    await cart.gotoCartPage()
    await expect(cart.yourCartTitle).toHaveText('Your Cart')
})

test('Add multiple items to the shopping cart.', async ({ page }) => {
    //Script
})

test('Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.', async ({ page }) => {
    //Script
})
