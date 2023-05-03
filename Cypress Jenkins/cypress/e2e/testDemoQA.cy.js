/// <reference types = "cypress"/>

describe('test locators', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })

    it('verify link 1', () => {

        cy.get('div.category-cards .card-body h5').contains('Elements').click()
        cy.get('#item-0 span').contains('Text Box').click()
        cy.get('#userName').type('Sasha', {timeout: 3000})
        cy.get('#userEmail').type('sasha@gmail.com').should('have.value', 'sasha@gmail.com') 
        cy.get('#currentAddress').type('Sasha the best QA')
        cy.get('#permanentAddress').type('Oops, sorry')
        // cy.get('#submit').contains('Submit').click()
    })
})

// describe('Test Suit: DemoQA Menu-titles', () => {
//     const expectedMenuItemsNames = [
//         'Elements',
//         'Forms',
//         'Alerts, Frame & Windows',
//         'Widgets', 'Interactions',
//         'Book Store Application'
//     ];

//     it('Verification menu items names - #1', () => {
//         cy.visit('https://demoqa.com/');
//         cy.get('.card')
//             .should('have.length', expectedMenuItemsNames.length)

//             .each(($el, idx) => {
//                 expect($el.text()).to.be.equal(expectedMenuItemsNames[idx])
//             })
//     })

//     it('Verification menu items names - #2', () => {
//         cy.visit('https://demoqa.com/');
//         cy.get('.card')
//             .should('have.length', expectedMenuItemsNames.length)

//             .then(($els) => {
//                 // let actual = 
//                 return Cypress.$.makeArray($els).map($el => $el.innerText)
//                 // expect(actual).to.be.deep.equal(expectedMenuItemsNames) // Chai
//             })
//             .should('deep.equal', expectedMenuItemsNames)
//     })

//     it('Verification menu items names - #3', () => {
//         cy.visit('https://demoqa.com/');
//         cy.get('.card')
//             .should('have.length', expectedMenuItemsNames.length)

//             .then(($els) => {
//                 return Cypress._.map($els, 'InnerText') // Lodash
//             })
//             .should('deep.equal', expectedMenuItemsNames) // Cypress
//     })
// });


