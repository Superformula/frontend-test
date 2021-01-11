/// <reference types="cypress" />
describe('Resto Explorer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the Restaurant List page', () => {
    // Check the page has loaded
    cy.get('[data-testid="list-page-title"]').should(
      'have.text',
      'Restaurants'
    );

    // Check the items of the list have loaded
    cy.get('[data-testid="restaurant-tile"]').should('have.length', 12);
  });

  it('should navigate to the Detail page of the first restaurant', () => {
    // Select the first restaurant name
    cy.get('[data-testid="restaurant-name"]')
      .first()
      .then((name) => {
        // Store the text
        const restaurantName = name.text();

        // Navigate to the detail page
        cy.get('[data-testid="learn-more"]').first().click();

        // Validate the name is correct
        cy.get('[data-testid="restaurant-detail-name"]').should(
          'have.text',
          restaurantName
        );
      });
  });
});
