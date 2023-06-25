/// <reference types="cypress" />

describe('example to-do app', () => {
    // beforeEach(() => {
    //   cy.visit('https://multishik.cynteka.ru/#/goods/registry/all')
    // })

    it('login', () => {
        cy.visit('https://multishik.cynteka.ru/#/goods/registry/all')
        cy.get('#login').type('9995180880')
        cy.get('#password').type('12345qwert')
        cy.get("button[class^='btn']").click();

        cy.get("[href='/#person/registry']").click()
        cy.get('[class="icon ng-star-inserted"]').click()

        cy.get('[class="login-control-wrapper default"]').type('9991231214')
        cy.get('#mat-input-1').type('Пупкин')
        cy.get('#mat-input-2').type('Иван')
        cy.get('#mat-input-4').type('Амур')
        cy.get('mat-option:nth-child(1)').click();
            

        cy.get(':nth-child(9) > .ng-tns-c234-13 > field-template > .field-wrapper > .field > .line-list-wrapper > .item').click()
        cy.contains('API').click()
        cy.get('[class="footer"] > button').click()
        cy.get('[class="sm-white ng-star-inserted"]').click()
    })// /html/body/app-root/app-template-module/app-person-info-editor/div/div/div/div/div/field-render-module/div/controls-render/div/div/div[9]/multiselect-control/field-template/div/div[2]/div[1]/button
      ///html/body/app-root/app-template-module/app-person-info-editor/div/div/div/div/div/field-render-module/div/controls-render/div/div/div[10]/multiselect-control/field-template/div/div[2]/div/button

    // it('create company', () => {

    //     cy.get('#login').type('9995180880')
    //     cy.get('#password').type('12345qwert')
    //     cy.get("button[class^='btn']").click();

    //     cy.get('[href="/#/company/registry"]').click()
    //     cy.get('[class="icon ng-star-inserted"]').click()
    //     cy.get("input[class='default']").type(7823)

    //     cy.get('[class="item-hint ng-star-inserted"]').then($els => {
    //         const arrSearchField = Cypress.$.makeArray($els).map($el => $el.innerText)
    //         cy.log(arrSearchField)
    //         cy.wrap(arrSearchField).should('include', '7823')
            
            // for (el of arrSearchField) {
            //     if (arrSearchField[el] === 7823) {

            //     }
            // }

            // cy.wrap(arrSearchField).should('have.text', 7823)
    //     })
    // })
})