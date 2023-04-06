describe('Unit Test Login Fail With Error Message', () => {

  it('Login Fail With Error Message', () => {
    cy.visit('http://localhost:4200/user/login')

    //Login with inputing username and password
    cy.get('#usernameTextField').clear()

    cy.get('#passwordTextField').clear()

    //Click on submit button
    cy.get('button[type=submit]').click()

    cy.contains("Form Data Invalid").should('be.visible')

  })
})