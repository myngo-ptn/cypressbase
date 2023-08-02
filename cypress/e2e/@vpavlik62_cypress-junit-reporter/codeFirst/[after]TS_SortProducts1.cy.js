import InventoryPage from "../../../support/PageObject/InventoryPage";

describe("[@vpavlik62_cypress-junit-reporter][codeFirst][after][Last TC fails] Sort products", () => {
    let productsData;
    let productsPath = "products/products";
    let accountData;
    let accountPath = "login/accounts";
    let userName = Cypress.env('USER_NAME');
    let password = Cypress.env('PASSWORD');
    const inventoryPage = new InventoryPage();

    before(function () {
        cy.fixture(accountPath).then(function (jsonFile) {
            accountData = jsonFile;
        });
        
        cy.fixture(productsPath).then(function (jsonFile) {
            productsData = jsonFile;
        });
    });
    
    beforeEach(() => {
        cy.visit("/");
    });
    
    afterEach(() => {
        cy.logout()
    });

    after(() => {
        inventoryPage.getHamburgerButton()
            .should('not.exist');
    })

    it("Verify that user can sort the products according to Price (low to high)", function () {
        cy.login(userName, password);

        inventoryPage.getSortDropdown()
            .select(productsData.sortCriteria[2]);
        inventoryPage.getProductPrices()
            .then((els) => {
                let currentArr = [];
                let sortArr = [];
                for(let i = 0; i < els.length; i++) {
                    currentArr.push(parseFloat(els[i].innerText.substring(1)));
                    sortArr.push(parseFloat(els[i].innerText.substring(1)));
                }
                sortArr.sort((a, b) => a - b);
                expect(JSON.stringify(currentArr)).to.be.eq(JSON.stringify(sortArr))
            })
    });

    it("Verify that user can sort the products according to Price (high to low)", function () {
        cy.login(accountData.problemAccount.userName, accountData.problemAccount.password);

        inventoryPage.getSortDropdown()
            .select(productsData.sortCriteria[3]);
        inventoryPage.getProductPrices()
            .then((els) => {
                let currentArr = [];
                let sortArr = [];
                for(let i = 0; i < els.length; i++) {
                    currentArr.push(parseFloat(els[i].innerText.substring(1)));
                    sortArr.push(parseFloat(els[i].innerText.substring(1)));
                }
                sortArr.sort((a, b) => b - a);
                expect(JSON.stringify(currentArr)).to.be.eq(JSON.stringify(sortArr))
            })
    });

});