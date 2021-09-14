/// <reference types="cypress" />

describe('search input', () => {
  it('is visible', () => {
    cy.visit('/');

    cy.get('input[type="search"]').should('be.visible');
  });
});
