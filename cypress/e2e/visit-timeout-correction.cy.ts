it('navigates to docs.cypress.io and runs additional commands', () => {
  cy.visit('http://localhost:3000')
  cy.visit('https://docs.cypress.io') // visit a different domain
  cy.origin('https://docs.cypress.io', () => {
    cy.get('h1').should('contain', 'Why Cypress?') // now succeeds!
  })
})
