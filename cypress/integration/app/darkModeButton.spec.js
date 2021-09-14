/// <reference types="cypress" />

describe('/darkMode', () => {
  it('click on the input button placed on header to activate dark mode', () => {
    cy.visit('/');
    // clicar no botão
    cy.get('[aria-label="dark mode"]').click();
  });
});
