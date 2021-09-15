/// <reference types="cypress" />

describe('header', () => {
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
    it('header is visible', () => {
      cy.visit('/hot');
      cy.url().should('include', 'hot');
      cy.get('header').should('be.visible');
    });
  });
});
