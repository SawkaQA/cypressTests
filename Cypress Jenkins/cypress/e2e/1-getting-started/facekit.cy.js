/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://multishik.cynteka.ru/#/goods/registry/all')
    })

    it('login', () => {
        cy.get('#login').type('9995180880')
        cy.get('#password').type('12345qwert')
        cy.get("button[class^='btn']").click();
    })

    it('create company', () => {

        cy.get('#login').type('9995180880')
        cy.get('#password').type('12345qwert')
        cy.get("button[class^='btn']").click();

        cy.get('[href="/#/company/registry"]').click()
        cy.get('[class="icon ng-star-inserted"]').click()
        cy.get("input[class='default']").type(7823)

        cy.get('[class="item-hint ng-star-inserted"]').then($els => {
            const arrSearchField = Cypress.$.makeArray($els).map($el => $el.innerText)
            cy.log(arrSearchField)
            cy.wrap(arrSearchField).should('include', '7823')
            
            // for (el of arrSearchField) {
            //     if (arrSearchField[el] === 7823) {

            //     }
            // }

            // cy.wrap(arrSearchField).should('have.text', 7823)
        })
    })
})