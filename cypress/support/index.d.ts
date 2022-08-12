declare namespace Cypress {
    interface Chainable<Subject> {

        /**
         * Verify switch is turned on
         * @example cy.getPPRSwitch().verifySwitchIsTurnedOn();
         */
        verifySwitchIsTurnedOn(): Chainable<JQuery<HTMLElement>>

        /**
         * Verify text box has invalid value should be highlighted
         * @example cy.getUserNameTextBox().verifyTextBoxIsHighlighted();
         */
        verifyTextBoxIsHighlighted(): Chainable<JQuery<HTMLElement>>
    }
}