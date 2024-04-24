exports.CheckoutPage = class CheckoutPage {

    constructor(page) {
        this.page = page
        this.yourInfomationTitle = page.locator('[data-test="title"]')
            }

    async gotoCheckoutPage() { 
        await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
    }

    async functionName(){

    }

}
