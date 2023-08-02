import InventoryPage from "../../../support/PageObject/InventoryPage";

describe("[@vpavlik62_cypress-junit-reporter][codeFirst][after][Last TC passes] Sort products", () => {
    let productsData;
    let productsPath = "products/products";
    let userName = Cypress.env('USER_NAME');
    let password = Cypress.env('PASSWORD');
    const inventoryPage = new InventoryPage();

    before(function () {
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

    after(() => {
        inventoryPage.getHamburgerButton()
            .should('exist');
    })

    it("Verify that the products are sorted according to Name (A to Z) by default", function () {
        inventoryPage.getProductNames()
            .then((els) => {
                let currentArr = [];
                let sortArr = [];
                for(let i = 0; i < els.length; i++) {
                    currentArr.push(els[i].innerText);
                    sortArr.push(els[i].innerText);
                }
                sortArr.sort();
                expect(JSON.stringify(currentArr)).to.be.eq(JSON.stringify(sortArr))
            })
    });

    it("Verify that user can sort the products according to Name (Z to A)", function () {
        inventoryPage.getSortDropdown()
            .select(productsData.sortCriteria[1]);
        inventoryPage.getProductNames()
            .then((els) => {
                let currentArr = [];
                let sortArr = [];
                for(let i = 0; i < els.length; i++) {
                    currentArr.push(els[i].innerText);
                    sortArr.push(els[i].innerText);
                }
                sortArr.sort()
                    .reverse();
                expect(JSON.stringify(currentArr)).to.be.eq(JSON.stringify(sortArr))
            })
    });

});