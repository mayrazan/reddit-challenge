/// <reference types="cypress" />

describe('/buttonNavigation', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
  describe('/login', () => {
    it('should be visible', () => {
      cy.visit('/');
      cy.get('button').should('be.visible');
      cy.setLocalStorage('user', true);
      cy.setLocalStorage('@token', '@token');
    });
  });

  describe('after login', () => {
    it('click on button new to navigate to posts in that category', () => {
      cy.visit('/hot');

      // clicar no botão new
      cy.get('button').contains('New', { timeout: 30000 }).click();

      cy.intercept(
        'https://www.reddit.com/r/reactjs/new.json?count=1&raw_json=1&after=undefined',
      ).as('apiRequest');

      cy.url().should('include', 'new');

      cy.wait('@apiRequest').its('response.statusCode').should('eq', 200);
    });
  });
});
