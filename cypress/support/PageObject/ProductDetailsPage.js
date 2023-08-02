class ProductDetailsPage {

    getProductName() {
        return cy.get('.inventory_details_name');
    }

    getProductDesc() {
        return cy.get('.inventory_details_desc');
    }

    getProductPrice() {
        return cy.get('.inventory_details_price');
    }

    getAddOrRemoveButton() {
        return cy.get('.btn_inventory');
    }

    getBackToProductsButton() {
        return cy.get('#back-to-products');
    }
}

export default ProductDetailsPage;