/// <reference types="cypress" />

describe('/darkMode', () => {
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
    it('click on the input button placed on header to activate dark mode', () => {
      cy.visit('/hot');
      cy.url().should('include', 'hot');
      // clicar no botão
      cy.get('[aria-label="dark mode"]').click();
    });
  });
});
