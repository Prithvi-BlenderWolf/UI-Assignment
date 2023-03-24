import getbynderDashboard from '../../fixtures/dashboardURL.json';

describe("Dashoard UI Scenarios DESKTOP", () => {

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
    });


    it("To check if all the UI Label text in Dashboard is displayed or not", function () {


        cy.visit(getbynderDashboard)
        let UILabels = [
            "#focus-new",
            '.account-logo > img',
            '.nav-main > :nth-child(1) > a',
            '.nav-main > :nth-child(2) > a',
            '.nav-main > :nth-child(3) > a',
            ':nth-child(4) > .active',
            ':nth-child(5) > .active',
            '#anchor-file-selector',
            '.profile',
            '#custom-support-form-button',
            '#appcues-launchpad-trigger > .footer-btn'

        ];
        UILabels.forEach((selector) => {
            cy.get(selector).should("be.visible") // Asserts each webelement

        });

    })


})

describe("Dashoard UI Scenarios MOBILE & TABLET", () => {

    beforeEach(() => {
        cy.session('uiLogin', () => {
            cy.visit('https://wave-trial.getbynder.com/');
            cy.wait(2000)
            cy.url().should('eq', 'https://wave-trial.getbynder.com/login/'); // url assertion

            cy.get('#inputEmail').type('qa-assignment')
            cy.get('#inputPassword').type('qa-Bynder2023!')
            cy.get('.login-btn').click()
            cy.wait(3000)

            cy.url().should('eq', 'https://wave-trial.getbynder.com/account/dashboard/'); // Dashboard url assertion

        })
    });

    var viewPort = ['iphone-8', 'ipad-2']

    viewPort.forEach((size) => {

        it(`To check if all the UI Label text in Dashboard is displayed or not ${size}`, function () {

            cy.viewport(size)
            cy.visit(getbynderDashboard)
            let UILabels = [
                "#focus-new",
                '.account-logo > img',
                '.nav-main > :nth-child(1) > a',
                '.nav-main > :nth-child(2) > a',
                '.nav-main > :nth-child(3) > a',
                ':nth-child(4) > .active',
                ':nth-child(5) > .active',
                '#anchor-file-selector',
                '.profile',
                '#custom-support-form-button',
                '#appcues-launchpad-trigger > .footer-btn'

            ];
            UILabels.forEach((selector) => {
                cy.get(selector).should("be.visible") // Asserts each webelement

            });

        })

    })
    })