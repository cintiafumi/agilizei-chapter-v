import { ELEMENTS as el } from './elements';

const articleTitle = 'Article Title' + new Date().getTime();

class Articles {
  accessForm() {
    cy.get(el.newArticleLink).click();
  }

  fillForm() {
    cy.get(el.inputTitle).type(articleTitle);
    cy.get(el.inputDescription).type('Article description');
    cy.get(el.inputBody).type('Article body');
    cy.get(el.inputTag).type('cypress');
  }

  submitForm() {
    cy.contains('button', 'Publish Article').click();
  }

  checkPublication() {
    cy.contains(articleTitle).should('be.visible');

    cy.get('h1').should('have.text', articleTitle);
  }
}

export default new Articles();
