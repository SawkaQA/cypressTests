/// <reference types = "cypress"/>

describe('test locators', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })

    it('verify link 1', () => {

        cy.get('div.category-cards .card-body h5').contains('Elements').click()
        cy.get('#item-1 span').contains('Check Box').click();
        // cy.get('.rct-checkbox').click();
        cy.get('.rct-collapse').click();
    })
})
