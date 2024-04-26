import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { ProductsPage } from '../pages/products.page.js'
import { LOGIN } from '../data/data.json'

test('Login with a Valid User', async ({ page }) => {
    const logIn = new LoginPage(page)
    const product = new ProductsPage(page)
    await logIn.login(LOGIN.SUCCESS_USER, LOGIN.SUCCESS_PASSWORD)
    await expect(product.productsTitle).toBeVisible()
});

test('Login with Invalid User', async ({ page }) => {
    const logIn = new LoginPage(page)
    await logIn.login(LOGIN.WRONG_USER, LOGIN.WRONG_PASSWORD)
    await expect(logIn.error_message).toBeVisible()
});

test('Logout from the home page', async ({ page }) => {
    const logIn = new LoginPage(page)
    const product = new ProductsPage(page)
    await logIn.login(LOGIN.SUCCESS_USER, LOGIN.SUCCESS_PASSWORD)
    await product.burguerMenu.click()
    await product.logOutButton.click()
    await expect(logIn.login_button).toBeVisible()
});

