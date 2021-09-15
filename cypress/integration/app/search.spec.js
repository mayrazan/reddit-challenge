/// <reference types="cypress" />

describe('search input', () => {
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
    it('input search is visible', () => {
      cy.visit('/hot');

      cy.get('input[type="search"]').should('be.visible');
    });
  });
});
