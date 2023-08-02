import InventoryPage from "../../../support/PageObject/InventoryPage";
import ProductDetailsPage from "../../../support/PageObject/ProductDetailsPage";

describe("[junit][specFirst][beforeEach] Product Details", () => {
    let accountsData;
    let accountsPath = "login/accounts";
    let productsData;
    let productsPath = "products/products";
    let userName = Cypress.env('USER_NAME');
    let password = Cypress.env('PASSWORD');

    let inventoryPage = new InventoryPage();
    let productDetailsPage = new ProductDetailsPage();

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
        cy.login(userName1, password);
    });

    it("C6057 Verify that product detail is displayed precisely on Product Details page when navigating from Inventory page", function () {
        inventoryPage.getProductName(productsData.products[0].name)
            .click();
        productDetailsPage.getProductName()
            .should('have.text', productsData.products[0].name)
        productDetailsPage.getProductDesc()
            .should('have.text', productsData.products[0].description)
        productDetailsPage.getProductPrice()
            .should('have.text', productsData.products[0].price)
    });

    it("C6058 Verify that the user can remove an added product on the Product Details page", function () {
        inventoryPage.getRemoveButtonByProductName(productsData.products[0].name)
            .should('not.exist');
        inventoryPage.getAddToCartButtonByProductName(productsData.products[0].name)
            .click();
        inventoryPage.getCartBadge()
            .should('have.text', '1');
        inventoryPage.getRemoveButtonByProductName(productsData.products[0].name)
            .should('be.visible');
        inventoryPage.getProductName(productsData.products[0].name)
            .click();
        
        productDetailsPage.getAddOrRemoveButton()
            .should('have.text', 'Remove')
            .click();
        
        productDetailsPage.getAddOrRemoveButton()
            .should('have.text', 'Add to cart')
        productDetailsPage.getBackToProductsButton()
            .click();
        
        inventoryPage.getAddToCartButtonByProductName(productsData.products[0].name)
            .should('be.visible');
        inventoryPage.getCartBadge()
            .should('not.exist');
    });

});