describe('Login test', () => {

  beforeEach(() => {
    cy.openPage()
    cy.url().should('include', '/')
  })

  // --------- Test Login Success --------- 
  describe('Successfull Login', () => {

    it('Should login with valid credentials', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )

      cy.url().should('include', '/inventory.html')

      cy.get('.app_logo')
        .should('be.visible')
        .and('contain.text', 'Swag Labs')
    })
  })

  // --------- Test Login Invalid --------- 
  const INVALID_USER = 'test'
  const INVALID_PASS = 'password'

  describe('Invalid Login', () => {

    it('should not login with unregistered email', () => {

      cy.login(
        INVALID_USER,
        Cypress.env('ADMIN_PASS')
      )

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password ')

      cy.get('#login-button')
        .should('be.visible')
    })

    it('should not login with invalid password', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        INVALID_PASS
      )

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password')

      cy.get('#login-button')
        .should('be.visible')
    })
  })

})