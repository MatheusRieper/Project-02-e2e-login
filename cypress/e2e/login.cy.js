describe('Login', () => {
  
  it('Deve Realizar Login', function () {

    // Open Site
    cy.start()

    //Login
    cy.LoginSucesso('standard_user', 'secret_sauce')

    // Verificando Page
    cy.get('.app_logo')
      .should('be.visible')
  })

  it('Error Email', function () {

    //Open Site
    cy.start()

    //Login Email Error
    cy.ErroLogin('matheus', 'secret_sauce')

    //Message and Error
    cy.get('[data-test="error"]')
      .should('be.visible')
  })

  // Password Invalida
  it('Error Password', function () {

    //Open Site
    cy.start()

    //Login Password Error
    cy.ErroLogin('standard_user', '1234')

    //Message and Error
    cy.get('[data-test="error"]')
      .should('be.visible')
  })
})

