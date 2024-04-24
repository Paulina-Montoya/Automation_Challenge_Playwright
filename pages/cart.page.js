exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page
        this.yourCartTitle = page.locator('[data-test="title"]')
            }

    async gotoCartPage() { 
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }

    async functionName(){

    }

}
