import InventoryPage from "../../../support/PageObject/InventoryPage";
import CartPage from "../../../support/PageObject/CartPage";
import CheckoutPage from "../../../support/PageObject/CheckoutPage";

describe("[cypress-xml-reporter][specFirst][afterEach][TC fail in 'after each' hook fails] Check out", () => {
    let accountsData;
    let accountsPath = "login/accounts";
    let productsData;
    let productsPath = "products/products";

    let inventoryPage = new InventoryPage();
    let cartPage = new CartPage();
    let checkoutPage = new CheckoutPage();

    before(function () {
        cy.fixture(accountsPath).then(function (jsonFile) {
            accountsData = jsonFile;
        });
        
        cy.fixture(productsPath).then(function (jsonFile) {
            productsData = jsonFile;
        });
    });
    
    beforeEach(() => {
        cy.visit("/");
        cy.login(accountsData.problemAccount.userName, accountsData.problemAccount.password);

        inventoryPage.getAddToCartButtonByProductName(productsData.products[0].name)
            .click();
        inventoryPage.getCartIcon()
            .click();
        cartPage.getCheckoutButton()
            .click();
    });
    
    afterEach(() => {
        cy.logout();
        inventoryPage.getHamburgerButton()
            .should('not.exist');
    })

    it("C6089 Verify that the user can not checkout with First Name blank", function () {
        checkoutPage.getLastNameInput()
            .type(accountsData.checkout.lastName);
        checkoutPage.getZipCodeInput()
            .type(accountsData.checkout.zip);
        checkoutPage.getContinueButton()
            .click();
        checkoutPage.getErrorMessage()
            .should('eq', accountsData.checkout.errorMessages[0]);
    });

    it("C6090 Verify that the user can not checkout with Last Name blank", function () {
        checkoutPage.getFirstNameInput()
            .type(accountsData.checkout.firstName);
        checkoutPage.getZipCodeInput()
            .type(accountsData.checkout.zip);
        checkoutPage.getContinueButton()
            .click();
        checkoutPage.getErrorMessage()
            .should('eq', accountsData.checkout.errorMessages[1]);
    });

    it("C6091 Verify that the user can not checkout with Zip Code blank", function () {
        checkoutPage.getFirstNameInput()
            .type(accountsData.checkout.firstName);
        checkoutPage.getLastNameInput()
            .type(accountsData.checkout.lastName);
        checkoutPage.getContinueButton()
            .click();
        checkoutPage.getErrorMessage()
            .should('eq', accountsData.checkout.errorMessages[2]);
    });

    it("C6092 Verify that the user can checkout with a valid First Name, Last Name, and Zip Code", function () {
        checkoutPage.getFirstNameInput()
            .type(accountsData.checkout.firstName);
        checkoutPage.getLastNameInput()
            .type(accountsData.checkout.lastName);
        checkoutPage.getZipCodeInput()
            .type(accountsData.checkout.zip);
        checkoutPage.getContinueButton()
            .click();
        checkoutPage.getFinishButton()
            .click();
        checkoutPage.getCompleteMessage()
            .should('eq', accountsData.checkout.completeMessage);
    });

});