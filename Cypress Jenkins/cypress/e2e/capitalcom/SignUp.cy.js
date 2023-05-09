/// <reference types = "cypress" />

describe('Capital.com Smoke test', () => {

    it('Test SignUp Form', () => {
        
        // Check Sign Up
        cy.visit('https://capital.com/')
        cy.viewport(1280, 720)
        cy.title().should('eq', 'Online Trading with Smart Investment App | Capital.com')
        cy.get('.listChecked__btn > .btn')
        .should('contain', 'Start trading')
        .click()
        cy.get('.signup-form').should('be.visible')
        cy.get('.signup-form > .form-container-small-header > .h1')
        .should('have.text', 'Sign up')
        cy.get('#s_overlay-email span').should('have.text', 'Email address')
        cy.get('input[type="email"]')
        .should('have.text', '')
        cy.get('#s_overlay-pass span').should('have.text', 'Password')
        cy.get('input[type="password"]')
        .should('have.text', '')
        cy.get('button[type="submit"]').should('be.visible')

        // Check button [Login]
        cy.wait(3000);
        cy.get('.signup-form > .form-container-small-header > p > .l_btn_signup')
        .click()
        cy.get('#l_overlay > .form-container-white > .form-container-small-header > .h1')
        .should('have.text', 'Login')
        cy.get('#l_f_email span')
        .should('have.text', 'Email address')
        cy.get('input[type="email"]')
        .should('have.text', '')
        cy.get('#l_f_pass span')
        .should('have.text', 'Password')
        cy.get('input[type="password"]')
        .should('have.text', '')
        cy.get('.l_btn_forgot')
        .should('have.text', 'Forgot password?')
        cy.get('.checkbox > span')
        .should('not.be.checked')
        cy.get('button[type="submit"]').should('be.visible')
    })
})