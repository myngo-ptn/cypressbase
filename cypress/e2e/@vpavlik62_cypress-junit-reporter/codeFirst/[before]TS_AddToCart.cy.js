import InventoryPage from "../../../support/PageObject/InventoryPage";
import CartPage from "../../../support/PageObject/CartPage";

describe("[@vpavlik62_cypress-junit-reporter][codeFirst][before] Add product to cart", () => {
    let accountData, productsData;
    let accountPath = "login/accounts";
    let productsPath = "products/products";
    let userName = Cypress.env('USER_NAME');
    let password = Cypress.env('PASSWORD');
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();

    before(function () {
        cy.fixture(accountPath1).then(function (jsonFile) {
            accountData = jsonFile;
        });
        cy.fixture(productsPath).then(function (jsonFile) {
            productsData = jsonFile;
        });
    });
    
    beforeEach(() => {
        cy.visit("/");
        cy.login(userName, password);
    });
    
    afterEach(() => {
        cy.logout()
    });

    it("Verify that user can add product to cart and remove product from cart screen", function () {
        inventoryPage.getAddToCartButtonByProductName(productsData.products[0].name)
            .click();
        inventoryPage.getCartBadge()
            .invoke('text')
            .should('eq', '1');
        inventoryPage.getRemoveButtonByProductName(productsData.products[0].name)
            .should('be.visible')
            .click();
        inventoryPage.getCartBadge()
            .should('not.exist');
    });

    it("Verify that user can add product to cart and remove product from inventory screen", function () {
        inventoryPage.getAddToCartButtonByProductName(productsData.products[0].name)
            .click();
        inventoryPage.getCartBadge()
            .invoke('text')
            .should('eq', '1');
        inventoryPage.getCartIcon()
            .click();
        cartPage.getCartItems()
            .eq(0)
            .find('.inventory_item_name')
            .should('contain.text', productsData.products[0].name)
        cartPage.getCartItems()
            .eq(0)
            .find('button:contains("Remove")')
            .click();
        cartPage.getCartItems()
            .should('not.exist');
    });

});