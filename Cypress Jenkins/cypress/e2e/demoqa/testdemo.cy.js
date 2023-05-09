/// <reference types = "cypress"/>

describe('Test DemoQA', () => {

    it('verify link', () => {
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'DEMOQA');
        // cy.pause();
        cy.get('div.category-cards .card-body')
        .find('h5')
        .should('have.length', 6)
        cy.get('div.card-body h5')
        .contains('Elements')
        .click();
        cy.get('div.main-header').should('contain', 'Elements')
        cy.get('div.main-header').should('be.visible')


    })
})