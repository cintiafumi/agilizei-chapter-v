/// <reference types="cypress" />

describe('Articles', () => {
  beforeEach(() => {
    cy.login();

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
