/// <reference types = "cypress"/>

describe('test locators', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form/')
    })

    it('Upload Files', () => {
        cy.get('#uploadPicture').selectFile('cypress/fixtures/text.txt')
    })
})