describe('test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('h1', () => {
    cy.get('h1').should('have.text', '🏎️ 자동차 경주 게임');
  });
});
