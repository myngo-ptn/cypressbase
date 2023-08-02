class CheckoutPage {

    getFirstNameInput() {
        return cy.get('#first-name');
    }

    getLastNameInput() {
        return cy.get('#last-name');
    }

    getZipCodeInput() {
        return cy.get('#postal-code');
    }

    getContinueButton() {
        return cy.get('#continue');
    }

    getFinishButton() {
        return cy.get('#finish');
    }

    getErrorMessage() {
        return cy.get('.error-message-container.error')
            .invoke('text');
    }

    getCompleteMessage() {
        return cy.get('#checkout_complete_container > h2.complete-header')
            .invoke('text');
    }
}

export default CheckoutPage;

