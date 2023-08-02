class InventoryPage {
    productDesc = '.inventory_item_desc';
    productPrice = '.inventory_item_price';

    getHamburgerButton() {
        return cy.get('button[id="react-burger-menu-btn"]');
    }
    
    getLogoutLink() {
        return cy.contains('a','Logout');
    }

    getProductName(productName) {
        return cy.get(`.inventory_item_name:contains('${productName}')`)
    }

    getProductByName(productName) {
        return this.getProductName(productName)
            .parents('.inventory_item');
    }

    getProductNames() {
        return cy.get('.inventory_item_name');
    }

    getAddToCartButtonByProductName(productName) {
        return this.getProductName(productName)
            .parents('.inventory_item')
            .find('button:contains("Add to cart")');
    }

    getRemoveButtonByProductName(productName) {
        return this.getProductName(productName)
            .parents('.inventory_item')
            .find('button:contains("Remove")');
    }

    getCartBadge() {
        return cy.get('.shopping_cart_badge');
    }

    getCartIcon() {
        return cy.get('.shopping_cart_link');
    }

    getSortDropdown() {
        return cy.get('.product_sort_container');
    }

    getProductPrices() {
        return cy.get('.inventory_item_price');
    }
}

export default InventoryPage;

