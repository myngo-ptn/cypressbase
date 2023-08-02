class CartPage {

    getCartItems() {
        return cy.get('.cart_item');
    }

    getCheckoutButton() {
        return cy.get('#checkout');
    }
}

export default CartPage;

