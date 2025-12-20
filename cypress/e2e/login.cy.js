describe('Login test', () => {

  beforeEach(() => {
    cy.openPage()
    cy.url().should('include', '/')
  })

  // --------- Test Login Success --------- 
  describe('Successfull Login', () => {

    it('Should login with valid credentials', () => {

      cy.login('standard_user', 'secret_sauce')

      cy.url().should('include', '/inventory.html')

      cy.get('.app_logo')
        .should('be.visible')
        .and('contain.text', 'Swag Labs')
    })
  })

  // --------- Test Login Invalid --------- 
  describe.only('Invalid Login', () => {

    it('should not login with unregistered email', () => {

      cy.login('test.com', 'secret_sauce')

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password ')

      cy.get('#login-button')
        .should('be.visible')
    })

    it('should not login with invalid password', () => {

      cy.login('standard_user', '1234')

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Username and password')

      cy.get('#login-button')
        .should('be.visible')
    })
  })

})

