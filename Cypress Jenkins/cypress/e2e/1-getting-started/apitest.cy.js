/// <reference types="cypress" />

const BASE_URL = "https://reqres.in/api";
const token = "asdsadasdasd";
const expires = "21.21.121.23";
const getListUsers = () => cy.api(`${BASE_URL}/users`);
const postCreate = () =>
    cy.api({
        method: "POST",
        url: `${BASE_URL}/users`,
        body: {
            name: "morpheus",
            job: "leader",
        },
    });

describe("API Test", () => {
    it("Get users verify status code", () => {
        getListUsers()
            .then((response) => {
                console.log(response);
            })
            .its("status")
            .should("be.eq", 200);
    });

    it("Get users verify body", () => {
        getListUsers().its("body");
    });

    it("Post users - verify status code", () => {
        postCreate().its("status").should("be.eq", 201);
    });

    it("Post users - verify respone has name be a string", () => {
        postCreate().its("body.name").should("be.a", "string");
    });

    it("Login to the site", () => {
        cy.setCookie("userName", "Sawka");
        cy.setCookie("token", token);
        cy.setCookie("expires", expires);
    });
});
