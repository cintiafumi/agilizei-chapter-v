/// <reference types="cypress" />

describe('Articles', () => {
  it('should add new', () => {
    cy.visit('login');
    cy.get('[placeholder=Email]').type('batatinha123@mail.com');
    cy.get('[placeholder=Password]').type('batatinha123');
    
    cy.contains('button', 'Sign in').click();
    
    cy.get('[href*=editor]').click();
    
    const articleTitle = 'Article Title' + new Date().getTime();

    cy.get('[ng-model$=title]').type(articleTitle);
    cy.get('[ng-model$=description]').type('Article description');
    cy.get('[ng-model$=body]').type('Article body');
    cy.get('[ng-model$=tagField]').type('cypress');

    cy.contains('button', 'Publish Article').click();

    cy.contains(articleTitle).should('be.visible');

    cy.get('h1').should('have.text', articleTitle)
  });
});
