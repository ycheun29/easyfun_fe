describe('Unit Test Leave a comment in an activity', () => {


  it('Leave a comment in an activity', () => {
    const username = 'kam'

    const password = '1234567'

    const comment = 'Testing with Cypress, leaving comments'

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

    //typing a comment
    cy.get('#commentTextField').type(comment);

    //click on to sumbit the comment
    cy.get('.button > .btn-primary').click();
    cy.wait(1000);

    //the page should contain the comment submitted
    cy.get('[class="offset-md-2 col-md-8"]').should('contain', comment)
  })
})