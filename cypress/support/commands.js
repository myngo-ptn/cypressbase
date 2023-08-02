// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import InventoryPage from "./PageObject/InventoryPage";
import LoginPage from "./PageObject/LoginPage";

Cypress.Commands.add('login',
    (username, password) => {
        const loginPage = new LoginPage();
        loginPage.getUserNameTextBox()
            .type(username);
        loginPage.getPasswordTextBox()
            .type(password);
        loginPage.getLoginButton()
            .click();
        loginPage.getLoginButton()
            .should('not.exist');
    }
)

Cypress.Commands.add('logout',
    () => {
        const inventoryPage = new InventoryPage();
        inventoryPage.getHamburgerButton()
            .click();
        inventoryPage.getLogoutLink()
            .click();
    }
)

Cypress.Commands.add('verifyTextBoxIsHighlighted',
    { prevSubject: 'element' },
    ($el) => {
        return cy.wrap($el)
            .then((el) => {
                cy.wrap(el).next()
                    .should('have.attr', 'data-icon', 'times-circle');
                expect(el).to.have.class('input_error form_input error');
            })

    }
)

Cypress.Commands.add('verifySwitchIsTurnedOn',
    { prevSubject: 'element' },
    ($el) => {
        return cy.wrap($el)
            .find('span[role="switch"]')
            .should("have.attr", 'aria-checked', 'true');
    }
)

