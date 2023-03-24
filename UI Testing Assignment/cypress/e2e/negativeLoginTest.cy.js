describe("Verify Negative Login Scenarios", () => {

    it("To check if the proper error message is displayed or not with invalid login credentials", function () {

        cy.visit('https://wave-trial.getbynder.com/');
cy.wait(2000)
cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion
   cy.get('#inputEmail').type('invalidqa-assigment')
    cy.wait(1000)
    cy.get('#inputPassword').type('PassWord!1')
    cy.wait(1000)
    cy.get('.login-btn').click()
    cy.get('.login-btn').click()

    cy.get('.notification > h1').should('be.visible'); // Error notification assertion

    cy.get('.notification > h1').invoke('text').should('eq',"You have entered an incorrect username or password.") // error Text Assertion
    })


})