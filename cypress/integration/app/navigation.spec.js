/// <reference types="cypress" />

describe('/buttonNavigation', () => {
  it('click on button new to navigate to posts in that category', () => {
    cy.visit('/');

    // clicar no botão new
    cy.get('button').contains('New', { timeout: 30000 }).click();

    cy.intercept(
      'https://www.reddit.com/r/reactjs/new.json?count=1&raw_json=1&after=undefined',
    ).as('apiRequest');

    cy.url().should('include', 'new');

    cy.wait('@apiRequest').its('response.statusCode').should('eq', 200);
  });
});
