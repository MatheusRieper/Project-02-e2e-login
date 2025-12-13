// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('start', () => {

    cy.viewport(1440, 900)  // Redimencionando Resolução de tela
    cy.visit('https://www.saucedemo.com/')  // Entrando no site
})

Cypress.Commands.add('LoginSucesso', (email, senha) => {
    //Email
    cy.get('[data-test="username"]')
        .should('be.visible')
        .clear()
        .type(email)

    //Senha
    cy.get('[data-test="password"]')
        .should('be.visible')
        .clear()
        .type(senha)

    //Button Login
    cy.get('[data-test="login-button"]')
        .should('be.visible')
        .click()

    // Verifica se entrou na página após login
    cy.url().should('include', '/inventory.html')
})

Cypress.Commands.add('ErroLogin', (email, senha) => {
    //Email
    cy.get('[data-test="username"]')
        .should('be.visible')
        .clear()
        .type(email)

    //Senha
    cy.get('[data-test="password"]')
        .should('be.visible')
        .clear()
        .type(senha)

    //Button Login
    cy.get('[data-test="login-button"]')
        .should('be.visible')
        .click()
})