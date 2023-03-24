
describe("Logout Test", () => {

    beforeEach(() => {
        cy.session('uiLogin', () => {
        cy.visit('https://wave-trial.getbynder.com/');
        cy.wait(2000)
        cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion

        cy.get('#inputEmail').type('qa-assignment')
        cy.get('#inputPassword').type('qa-Bynder2023!')
        cy.get('.login-btn').click()
        cy.wait(3000)

    })

})



    it("To verify Logut happening or not", function () {

        cy.visit('https://wave-trial.getbynder.com/account/dashboard/');
        cy.wait(2000)
        cy.get('.profile').click()
        cy.wait(1000)
        cy.get('form > .action-btn').click()
        cy.get('.notification > h1').should("be.visible") // Asserts the logged out notification

    })

})