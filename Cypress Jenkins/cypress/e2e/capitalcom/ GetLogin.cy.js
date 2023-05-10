/// <reference types = "cypress" />

// import Login from "../pages/Sign"
// import { Login } from '../pages/Sign'

describe('Capital.com Login Smoke tests', () => {

    const login = "sadsass@gmail.com"
    const pass = "123Qwert!@dsdDs"

    it('Test Login in Capital.com', () => {
        
        // Open capital and set res 1280x720
        cy.visit('https://capital.com/')
        cy.viewport(1920, 1080)
        cy.wait(2000)

        // Check Sign Up
        cy.get('#wg_loginBtn')
        .click();
        
        cy.get('#l_f_email > .field__control')
        .type(login)
        .should('have.value', login)
        
        cy.get('#l_f_pass > .field__control')
        .type(pass)
        .should('have.value', pass)

        cy.get('input[name=l_rem]')
        .closest('label')
        .click()
        
        cy.get('.form-container-white > .form-container-small-content > form > .btn')
        .dblclick()
    })
})