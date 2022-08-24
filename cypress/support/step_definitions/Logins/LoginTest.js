import { Given, And, Then, When, After, Before } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../../PageObject/InventoryPage";
import LoginPage, { verifyErrorMessageIsDisplayed } from "../../PageObject/LoginPage";


//Object Creation for PageObject Page Class and assigning it to a constant variable

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

// this will get called before each scenario

// this will only get called before scenarios tagged with @TC_001
After({ tags: "@TC_001" }, () => {
    cy.logout();
});

//test steps 
Given('user opens Login page', () => {
    cy.visit('/');
});


When('user enters user name as {string} and password as {string}', (username, password) => {
    loginPage.getUserNameTextBox()
        .type(username);
    loginPage.getPasswordTextBox()
        .type(password);
})

And('user clicks on {string} button', (loginbtn) => {
    var loginBtn = loginbtn;
    loginPage.getLoginButton()
        .click();
})

Then('user must see menu button', () => {
    inventoryPage.getHamburgerButton()
        .should('be.visible');
})

Then('user must see username and password fields are highlighted', () => {
    loginPage.getUserNameTextBox()
        .verifyTextBoxIsHighlighted();

    loginPage.getPasswordTextBox()
        .verifyTextBoxIsHighlighted();
})

Then('user must see block message', () => {
    verifyErrorMessageIsDisplayed("Epic sadface: Sorry, this user has been locked out.");
})