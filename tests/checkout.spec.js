import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { ProductsPage } from '../pages/products.page.js'
import { CartPage } from '../pages/cart.page.js'
import { CheckoutPage } from '../pages/checkout.page.js'

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

test('Open the Checkout page successfully', async ({ page }) => {
    const checkout = new CheckoutPage(page)
    const logIn = new LoginPage(page)
    await logIn.login('standard_user', 'secret_sauce')
    await checkout.gotoCheckoutPage()
    await expect(checkout.yourInfomationTitle).toHaveText('Checkout: Your Information')
})

