describe('Login test', function () {

  beforeEach( function () {
    cy.openPage()
    cy.url().should('include', '/')
  })

  // --------- Test Login Success --------- 
  describe('Successfull Login', function () {

    it('Should login with valid credentials', function () {

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

  describe('Invalid Login', function () {

    beforeEach( function () {
      cy.fixture('login').as('login')
    })

    it('should not login with unregistered', function () {

        this.login.invalid.forEach((data) => {

          cy.login(data.email, data.password)

          cy.contains(data.message).should('be.visible')

          cy.reload()
        })
    })
  })

})