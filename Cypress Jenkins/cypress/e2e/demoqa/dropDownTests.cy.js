/// <reference types = "cypress"/>

describe("test locators", () => {
  it("DropDownTest", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#state").click();
    cy.get("[id^=react-select-3-option]")
      .then(($els) => {
        const item = Cypress.$.makeArray($els).filter(
          ($el) => $el.innerText == "Rajasthan"
        );
        return cy.wrap(item);
      })
      .click({ force: true });
  });
});
