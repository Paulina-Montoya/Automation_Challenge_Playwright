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

test('Open Products Page Successfully', async ({ page }) => {
    //Should be a BeforeEach
    const product = new ProductsPage(page)
    const logIn = new LoginPage(page)
    await logIn.login('standard_user', 'secret_sauce')
    await expect(product.productsTitle).toHaveText('Products')
})

test.skip('Sort products by Price (low to high)', async ({ page }) => {
    //Open Products page (BeforeEach)
    const product = new ProductsPage(page)
    const logIn = new LoginPage(page)
    //const cart = new CartPage(page)
    await logIn.login('standard_user', 'secret_sauce')
    await expect(product.productsTitle).toHaveText('Products')
    //Tests scripts
    await product.sortByLowToHigh()
})


