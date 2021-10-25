/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()

    cy.visit('/')
  })

  it('should create a new article', () => {
    articles.accessForm()

    articles.fillForm()

    articles.submitForm()

    articles.checkPublication()
  })
})
