import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to Bynder Portal website', () => {
cy.visit('https://wave-trial.getbynder.com/');
cy.wait(2000)
cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion
})
When('Enter login credentials', () => {
    cy.get('#inputEmail').type('qa-assigment')
    cy.wait(1000)
    cy.get('#inputPassword').type('PassWord!1')
    cy.wait(1000)
    cy.get('.login-btn').click()
    cy.get('.login-btn').click()
})
Then('Should throw valid error response', () => {
    cy.get('.notification > h1').should('be.visible'); // Error notification assertion

    cy.get('.notification > h1').invoke('text').should('eq',"You have entered an incorrect username or password.") // error Text Assertion
})

    