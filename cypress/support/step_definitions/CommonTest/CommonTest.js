import { Given, And, Then, When, After, Before } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../../PageObject/InventoryPage";
import LoginPage, { verifyErrorMessageIsDisplayed } from "../../PageObject/LoginPage";


//Object Creation for PageObject Page Class and assigning it to a constant variable

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

// this will get called before each scenario

//test steps 
// Given('user opens Login page', () => {
//     cy.visit('/');
// });

// When(`user enters user name as {string} and password as {string}`, (username, password) => {
//     loginPage.getUserNameTextBox()
//         .type(username);
//     loginPage.getPasswordTextBox()
//         .type(password);
// })

// And(`user clicks on Login button`, () => {
//     loginPage.getLoginButton()
//         .click();
// })