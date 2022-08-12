class LoginPage {

    getUserNameTextBox() {
        return cy.get('input[id="user-name"]');
    }

    getPasswordTextBox() {
        return cy.get('input[id="password"]');
    }

    getLoginButton() {
        return cy.get('input[id="login-button"]');
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }
    

}

export default LoginPage;

/**
 * function to verify specific error message should display on Login page
 * @param {string} errorMessage - Specific error message
 * @example verifyErrorMessageIsDisplayed('Username or Password is incorrect');
 */
export function verifyErrorMessageIsDisplayed(errorMessage) {
    const loginPage = new LoginPage();
    return loginPage.getErrorMessage()
        .should('contain.text', errorMessage);
}

