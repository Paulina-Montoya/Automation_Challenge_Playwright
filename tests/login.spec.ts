import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { ProductsPage } from '../pages/products.page.js'


test('Login with a Valid User', async ({ page }) => {
    const logIn = new LoginPage(page)
    const product = new ProductsPage(page)
    await logIn.gotoLoginPage()
    await logIn.login('standard_user', 'secret_sauce')
    await expect(product.productsTitle).toBeVisible()
});

test('Login with Invalid User', async ({ page }) => {
    const logIn = new LoginPage(page)
    await logIn.gotoLoginPage()
    await logIn.login('wrong_user', 'secret_wrong')
    await expect(logIn.error_message).toBeVisible()
});

test('Logout from the home page', async ({ page }) => {
    const logIn = new LoginPage(page)
    const product = new ProductsPage(page)
    await logIn.gotoLoginPage()
    await logIn.login('standard_user', 'secret_sauce')
    await product.burguerMenu.click()
    await product.logOutButton.click()
    await expect(logIn.title).toBeVisible()
});