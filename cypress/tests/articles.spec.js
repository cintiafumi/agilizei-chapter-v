/// <reference types="cypress" />

describe('Articles', () => {
  beforeEach(() => {
    cy.request({
      url: 'https://api.realworld.io/api/users/login',
      method: 'POST',
      body: {
        "user": {
          "email": 'batatinha123@mail.com',
          "password": 'batatinha123',
        },
      },
    }).then((response) => {
      window.localStorage.setItem('jwtToken', response.body.user.token);
    });

    cy.visit('/');
  });

  it('should create a new article', () => {
    cy.get('[href*=editor]').click();

    const articleTitle = 'Article Title' + new Date().getTime();

    cy.get('[ng-model$=title]').type(articleTitle);
    cy.get('[ng-model$=description]').type('Article description');
    cy.get('[ng-model$=body]').type('Article body');
    cy.get('[ng-model$=tagField]').type('cypress');

    cy.contains('button', 'Publish Article').click();

    cy.contains(articleTitle).should('be.visible');

    cy.get('h1').should('have.text', articleTitle);
  });
});
