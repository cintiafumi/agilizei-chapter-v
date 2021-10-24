/// <reference types="cypress" />

describe('Register', () => {
  it('should register successfully', () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://api.realworld.io/api/users',
        path: '/api/users',
      },
      {
        statusCode: 200,
        fixture: 'register-success',
      }
    ).as('postUsers');

    cy.visit('register');

    cy.get('[placeholder=Username]').type('ChapterV');
    cy.get('[placeholder=Email]').type('ChapterV@mail.com');
    cy.get('[placeholder=Password]').type('123456');

    cy.get('button.btn-primary').click();
    cy.contains('No articles are here... yet.').should('be.visible');
  });

  it('should register with an username already taken', () => {
    cy.intercept(
      {
        method: 'POST',
        path: '/api/users',
      },
      {
        statusCode: 422,
        fixture: 'register-error-existing-username',
      }
    ).as('postUsersExistingUsername');

    cy.visit('register');

    cy.get('[placeholder=Username]').type('ChapterV');
    cy.get('[placeholder=Email]').type('ChapterV@mail.com');
    cy.get('[placeholder=Password]').type('123456');

    cy.get('button.btn-primary').click();

    cy.contains('username has already been taken').should('be.visible');
  });

  it('should register with an email already taken', () => {
    cy.intercept(
      {
        method: 'POST',
        path: '/api/users',
      },
      {
        statusCode: 422,
        fixture: 'register-error-existing-email',
      }
    ).as('postUsersExistingEmail');

    cy.visit('register');

    cy.get('[placeholder=Username]').type('ChapterV');
    cy.get('[placeholder=Email]').type('ChapterV@mail.com');
    cy.get('[placeholder=Password]').type('123456');

    cy.get('button.btn-primary').click();

    cy.contains('email has already been taken').should('be.visible');
  });
});
