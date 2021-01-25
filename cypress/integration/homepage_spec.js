describe('the homepage', () => {
  it('has all basic components', () => {
    cy.visit('/')
    cy.window().then(() => {
      cy.get('[data-testid="header"]').should('have.length', 1)
      cy.get('[data-testid="filters"]').should('have.length', 1)
      cy.get('[data-testid="showcase"]').should('have.length', 1)
    })
  })

  it('show 8 restaurants', () => {
    cy.get('[data-testid*="showcase-item"]').should('have.length', 8)
  })

  it('filters by category', () => {
    cy.get('[data-testid="select-filter-categories"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-categories-item"]').first().click()
    cy.wait(4000)
    cy.get('[data-testid="loading"]').should('have.length', 0)
  })

  it('filters by multiple categories', () => {
    cy.get('[data-testid="select-filter-categories"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-categories-item"]:nth-child(2)').click()
    cy.wait(4000)
    cy.get('[data-testid="select-filter-categories"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-categories-item"]:nth-child(4)').click()
    cy.wait(4000)
    cy.get('[data-testid="select-filter-categories"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-categories-item"]:nth-child(5)').click()
    cy.wait(5000)
    cy.get('[data-testid="loading"]').should('have.length', 0)
  })
  
  it('filters by price', () => {
    cy.get('[data-testid="select-filter-price"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-price-item"]:nth-child(2)').click()
    cy.wait(600)
    cy.get('[data-testid="loading"]').should('have.length', 0)
  })

  it('filters by multiple prices', () => {
    cy.get('[data-testid="select-filter-price"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-price-item"]:nth-child(3)').click()
    cy.wait(600)
    cy.get('[data-testid="select-filter-price"]').click()
    cy.wait(600)
    cy.get('[data-testid*="filter-price-item"]:nth-child(4)').click()
    cy.wait(600)
    cy.get('[data-testid="loading"]').should('have.length', 0)
  })

  it('filters by open now', () => {
    cy.get('[data-testid="checkbox-filter-open"]').click()
    cy.wait(600)
    cy.get('[data-testid="loading"]').should('have.length', 0)
  })

  it('clean all filters', () => {
    cy.get('[data-testid="clear-button"]').click()
    cy.wait(4000)
    cy.get('[data-testid*="showcase-item"]').should('have.length', 8)
  })

  it("showcase's item redirects to the restaurant when user clicks on the image", () => {
      cy.get('[data-testid*="showcase-mask"]').first().click()
      cy.wait(7000)
      cy.get('[data-testid="restaurants-header"').should("have.length", 1)
      cy.get('[data-testid="back-link"]').click()
      cy.wait(2000)
  })

  it("showcase's item redirects to the restaurant when user clicks on the learn more button", () => {
    cy.get('[data-testid*="showcase-learn-more"]').first().click()
    cy.wait(7000)
    cy.get('[data-testid="restaurants-header"').should("have.length", 1)
    cy.get('[data-testid="back-link"]').click()
    cy.wait(2000)
  })
})
