describe('the restaurant page', () => {
  it('has all basic components', () => {
    cy.visit("restaurants/gordon-ramsay-hell's-kitchen")
    cy.window().then(() => {
      cy.get('[data-testid="back-link"]').should('have.length', 1)
      cy.get('[data-testid="restaurants-header"]').should('have.length', 1)
      cy.get('[data-testid="photos"]').should('have.length', 1)
      cy.get('[data-testid="reviews"]').should('have.length', 1)
    })
  })
})
