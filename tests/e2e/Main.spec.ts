/// <reference types="cypress" />

context('page: main', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain the expected title', () => {
    cy
      .title()
      .should('include', 'Faster Food');
  });
});

export {};
