describe('Unit Test Login', () => {

  const username = 'kam'

  const password = '1234567'

  it('Login and show the username on navbar', () => {
    cy.visit('http://localhost:4200/user/login')

    //Login
    cy.get('[id=usernameTextField]').type(username)

    cy.get('[id=passwordTextField]').type(password)
    
    cy.get('button[type=submit]').click()

    //Name should be show after login 
    cy.get('[class=profile]').invoke('text').should('contain', username)

    //Can assecss management page that require for login
    cy.get('ul>li').eq(2).click()

    //Can assecss pages that require for login
    cy.visit('http://localhost:4200/activity/management')

  })
})