exports.ProductsPage = class ProductsPage {

    constructor(page) {
        this.page = page
        this.navBarTitle = page.getByText('Swag Labs')
        this.productsTitle = page.locator('[data-test="title"]')
        this.burguerMenu = page.getByRole('button', { name: 'Open Menu' })
        this.logOutButton = page.locator('[data-test="logout-sidebar-link"]')
        this.sortByButton = page.locator('[data-test="product-sort-container"]')
        this.sortByOption = page.locator('[value="lohi"]')
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cartIconButton = page.locator('[data-test="shopping-cart-link"]')
    }

    async gotoProductsPage() { 
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async sortByLowToHigh(){
        await this.sortByButton.click()
        await this.sortByOption.click()
    }

}

