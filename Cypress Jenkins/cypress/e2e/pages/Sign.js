// class Login() {
//     cy.get('#wphWrap > .js_signup')
//     .click();

//     cy.get('#s_overlay-email > .field__control')
//     .type('sadsass@gmail.com')
//     .should('have.value', 'sadsass@gmail.com')

//     cy.get('#s_overlay-pass > .field__control')
//     .type('123Qwert!@dsdDs')
//     .should('have.value', '123Qwert!@dsdDs')

//     cy.get('.signup-form > .form-container-small-content > form > .btn')
//     .dblclick()
// }

class Login {

        btnTradeNow = () =>  cy.get('#wphWrap > .js_signup');
        getEmail = () => cy.get('#s_overlay-email > .field__control');
        getPassword = () => cy.get('#s_overlay-pass > .field__control');
        clickBtnContinue = () => cy.get('.signup-form > .form-container-small-content > form > .btn')
}

export default new Login();
