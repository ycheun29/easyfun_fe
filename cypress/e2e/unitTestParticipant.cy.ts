describe('Unit Test Participate in an activity', () => {


  it('Participate in an activity with success message', () => {
    const username = 'kam'

    const password = '1234567'

    cy.visit('http://localhost:4200/user/login')

    //Login
    cy.get('[id=usernameTextField]').type(username)

    cy.get('[id=passwordTextField]').type(password)

    cy.get('button[type=submit]').click()

    cy.wait(1000);

    //click to view activities
    cy.get(':nth-child(1) > .card-body > .btn').click();

    //click on the first activity
    cy.get(':nth-child(1) > .card-body > .btn').click();

    //click on the register button
    cy.get('#info > .btn').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('successfully')})

  })
})