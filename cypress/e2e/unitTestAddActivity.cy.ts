describe('Unit Test Adding an Activity', () => {
  it('Login and Add an Activity', () => {
    const activity = {
      title: 'Running Together', 
      photo: 'https://media.istockphoto.com/id/1125038961/zh/%E7%85%A7%E7%89%87/%E6%97%A9%E6%99%A8%E5%9C%A8%E6%88%B6%E5%A4%96%E8%B7%91%E6%AD%A5%E7%9A%84%E5%B9%B4%E8%BC%95%E4%BA%BA.jpg?b=1&s=612x612&w=0&k=20&c=ocbB4ZFaQUKyDMOiY8jN5Mr27KM5o-QTuJRF7TUr3Kk=',
      price: '30',
      description: '21km running course by GoRun trainer Kam',
      category: 'Fitness Course',
    }

    cy.visit('http://localhost:4200/activity/management')


    cy.get('#usernameTextField').type('kam');
    cy.wait(1000);

    cy.get('#passwordTextField').type('1234567');
    cy.wait(1000);

    //click submit button to login
    cy.get('.btn-primary').click();
    cy.wait(1000);

    //click create activity button
    cy.get('a.btn').click();
    cy.wait(1000);

    //input activity information
    cy.get('#itemTextField').type(activity.title);
    cy.wait(1000);

    cy.get('#QtyTextField').type(activity.photo);
    cy.wait(1000);

    cy.get(':nth-child(5) > #statusTextField').type(activity.price);
    cy.wait(1000);

    cy.get(':nth-child(7) > #statusTextField').type(activity.description);
    cy.wait(1000);

    cy.get('#category').select('Fitness Course');
    cy.wait(1000);

    cy.get('#date').type('2023-04-01');
    cy.wait(1000);

    cy.get('#startTime').type('10:00');
    cy.wait(1000);

    cy.get('#endTime').type('12:00');
    cy.wait(1000);

    // click to submit
    cy.get('.btn-primary').click();
    cy.wait(1000);

    cy.contains(activity.title).should("exist");

  })
})