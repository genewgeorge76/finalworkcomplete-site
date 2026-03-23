describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h2')
    .contains('Built on Four Generations of Family Craftsmanship');
  })
  it('renders the logo', () => {
    cy.get('.logo')
    .should('be.visible')
    .contains('J. Worden');
  })
})
