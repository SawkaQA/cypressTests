/// <reference types = "cypress" />

describe('Capital.com Smoke test', () => {

    it('Test SignUp Form', () => {
        
        // Open capital and set res 1280x720
        cy.visit('https://capital.com/')
        cy.viewport(1280, 720)

        // Check Sign Up
        cy.title().should('eq', 'Online Trading with Smart Investment App | Capital.com')
        cy.get('.listChecked__btn > .btn')
        .should('contain', 'Start trading')
        .click()
        cy.get('.signup-form')
        .should('be.visible')
        cy.get('.signup-form > .form-container-small-header > .h1')
        .should('have.text', 'Sign up')
        cy.get('#s_overlay-email span')
        .should('have.text', 'Email address')
        cy.get('#s_overlay-email > .field__control')
        .should('have.text', '')
        cy.get('#s_overlay-pass span')
        .should('have.text', 'Password')
        cy.get('#s_overlay-pass > .field__control')
        .should('have.text', '')
        cy.get('button')
        .should('be.visible')
        .and('contain', 'Continue')

        // Check button [Login]
        cy.wait(3000);
        cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup')
        .click()
        cy.get('#l_overlay > .form-container-white > .form-container-small-header > .h1')
        .should('have.text', 'Login')
        cy.get('#l_f_email span')
        .should('have.text', 'Email address')
        cy.get('#l_f_email > .field__control')
        .should('have.text', '')
        cy.get('#l_f_pass span')
        .should('have.text', 'Password')
        cy.get('#l_f_pass > .field__control')
        .should('have.text', '')
        cy.get('button')
        .should('be.visible')
        .and('contain', 'Continue')

        // Check checkbox "Log me out after 7 days" and button [Continue]
        cy.get('input[type="checkbox"]')
        .check({ force: true })
        cy.get('input[type="checkbox"]')
        .should('be.checked')
        cy.wait(2000)
        cy.get('input[type="checkbox"]')
        .uncheck({ force: true })
        cy.get('input[type="checkbox"]')
        .should('not.be.checked')
        cy.get('button[type="submit"]')
        .should('be.visible')
        .and('contain', 'Continue')

         // Check button "Forgot password?"
         cy.get('.l_btn_forgot')
         .should('have.text', 'Forgot password?')
         .click()
         cy.get('#f_overlay > .form-container-white > .form-container-small-header > .h1')
         .should('have.text', 'Forgot password')
         cy.get('#f_f_email > .field__control')
         .should('have.text', '')
         cy.get('#f_f_email span')
         .should('have.text', 'Email address')
         cy.get('button[type="submit"]')
        .should('be.visible')
        .and('contain', 'Send reset email')
 
    })
})