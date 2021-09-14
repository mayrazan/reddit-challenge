/// <reference types="cypress" />

describe('header', () => {
  it('is visible', () => {
    cy.visit('/');

    cy.get('header').should('be.visible');
  });
});
