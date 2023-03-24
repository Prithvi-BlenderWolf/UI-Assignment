
describe("Positive Login Test", () => {

    it("To check if Login is successful or not, with valid credentials", function () {

        cy.visit('https://wave-trial.getbynder.com/');
        cy.wait(2000)
        cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion

        cy.get('#inputEmail').type('qa-assignment')
        cy.get('#inputPassword').type('qa-Bynder2023!')
        cy.get('.login-btn').click()
        cy.wait(3000)

        cy.url().should('eq', 'https://wave-trial.getbynder.com/account/dashboard/'); // Dashboard url assertion

    })


    it("To check if all the UI Label text is displayed or not in Login Page", function () {

        cy.visit('https://wave-trial.getbynder.com/');
        cy.wait(2000)
        cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion

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
            cy.get(selector).should("be.visible") // Asserts each webelement

        });

        cy.get(UILabels[5]).should("have.css", "font-size", "14px")
        .should("have.css", "color", "rgba(0, 34, 51, 0.5)"); // Asserts lost password css properties

    })

})