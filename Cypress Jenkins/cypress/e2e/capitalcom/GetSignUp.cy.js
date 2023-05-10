/// <reference types = "cypress" />

// import Login from "../pages/Sign"
// import { Login } from '../pages/Sign'

describe('Capital.com SignUp Smoke tests', () => {

    const login = "sadsass@gmail.com"
    const pass = "123Qwert!@dsdDs"

    it('Test SignUp in Capital.com', () => {
        
        // Open capital and set res 1280x720
        cy.visit('https://capital.com/')
        cy.viewport(1920, 1080)
        cy.wait(2000)

        // Check Sign Up
        cy.get('#wphWrap > .js_signup')
        .click();
        
        cy.get('#s_overlay-email > .field__control')
        .type(login)
        .should('have.value', login)
        
        cy.get('#s_overlay-pass > .field__control')
        .type(pass)
        .should('have.value', pass)
        
        cy.get('.signup-form > .form-container-small-content > form > .btn')
        .dblclick()
    })
})