import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('Refresh website', () => {
    cy.visit('https://wave-trial.getbynder.com/');
    cy.wait(2000)
    cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion
        })
    
        Then('All the expected Webelements should be visible', () => {
            
    
            let UILabels = [
                ".admin-bar-logo",
                '.admin-options > :nth-child(1) > :nth-child(1)',
                '.account-logo',
                '#inputEmail',
                '#inputPassword',
                '.lost-password > a',
                '.login-btn',
                '#custom-support-form-button'
          
              ];
              UILabels.forEach((selector) => {
                cy.get(selector)
                  .should("be.visible") // Asserts each webelement
          
              });

              cy.get(UILabels[5]).should("have.css", "font-size", "14px")
        .should("have.css", "color", "rgba(0, 34, 51, 0.5)"); // Asserts lost password css properties
    
        })