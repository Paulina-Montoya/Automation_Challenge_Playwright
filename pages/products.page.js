exports.ProductsPage = class ProductsPage {

    constructor(page) {
        this.page = page
        this.navBarTitle = page.getByText('Swag Labs')
        this.productsTitle = page.locator('[data-test="title"]')
        this.burguerMenu = page.getByRole('button', { name: 'Open Menu' })
        this.logOutButton = page.locator('[data-test="logout-sidebar-link"]')
        
    }

    async gotoProductsPage() { 
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async functionName(){

    }

}
