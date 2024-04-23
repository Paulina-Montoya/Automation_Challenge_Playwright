exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.title = page.getByText('Swag Labs')
        this.username_field = page.locator('[data-test="username"]')
        this.password_field = page.locator('[data-test="password"]')
        this.login_button = page.locator('[data-test="login-button"]')
        this.error_message = page.locator('[data-test="error"]')
    }

    async gotoLoginPage() { 
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password){
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click()
    }

}
