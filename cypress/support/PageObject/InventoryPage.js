class InventoryPage {

    getHamburgerButton() {
        return cy.get('button[id="react-burger-menu-btn"]');
    }
    
    getLogoutLink() {
        return cy.contains('a','Logout');
    }


}

export default InventoryPage;

