import LoginPage, { verifyErrorMessageIsDisplayed } from "../../../support/PageObject/LoginPage";

describe("[junit][specFirst][All pass] Create an account", () => {
    const loginPage = new LoginPage();
    let testdata;
    let dataPath = "login/accounts";
    let userName = Cypress.env('USER_NAME');
    let password = Cypress.env('PASSWORD');

    before(function () {
        cy.fixture(dataPath).then(function (accountJsonFile) {
            testdata = accountJsonFile;
        });
    });
    
    beforeEach(() => {
        cy.visit("/");
    });

    it(" C6050 Verify error message when user login with blank user name", function () {
        
        loginPage.getLoginButton()
            .click();

        loginPage.getUserNameTextBox()
            .verifyTextBoxIsHighlighted();

        loginPage.getPasswordTextBox()
            .verifyTextBoxIsHighlighted();

        verifyErrorMessageIsDisplayed(testdata.accounts[0].errorMessage);
        
    });

    it(" C6051 Verify error message when user login with blank password", function () {
        loginPage.getUserNameTextBox()
            .type(testdata.accounts[1].username);

        loginPage.getLoginButton()
            .click();

        loginPage.getUserNameTextBox()
            .verifyTextBoxIsHighlighted();

        loginPage.getPasswordTextBox()
            .verifyTextBoxIsHighlighted();

        verifyErrorMessageIsDisplayed(testdata.accounts[1].errorMessage);
        
    });

    it(" C6052 Verify error message when user login with invalid user name and password", function () {
        loginPage.getUserNameTextBox()
            .type(testdata.accounts[2].username);

        loginPage.getPasswordTextBox()
            .type(testdata.accounts[2].password);

        loginPage.getLoginButton()
            .click();

        loginPage.getUserNameTextBox()
            .verifyTextBoxIsHighlighted();

        loginPage.getPasswordTextBox()
            .verifyTextBoxIsHighlighted();

        verifyErrorMessageIsDisplayed(testdata.accounts[2].errorMessage);
        
    });

    it(" C6053 Verify error message when user login with invalid password", function () {
        loginPage.getUserNameTextBox()
            .type(userName);

        loginPage.getPasswordTextBox()
            .type(testdata.accounts[2].password);

        loginPage.getLoginButton()
            .click();

        loginPage.getUserNameTextBox()
            .verifyTextBoxIsHighlighted();

        loginPage.getPasswordTextBox()
            .verifyTextBoxIsHighlighted();

        verifyErrorMessageIsDisplayed(testdata.accounts[2].errorMessage);

    });

    it(" C6054 Verify that user can login with valid account", function () {
        cy.login(userName, password);
        cy.logout();
    });

});