describe('pizzaMedium', () => {
  it('M boyut, orta hamur, 6 malzeme, rastgele not ve success kontrolü', () => {
    cy.visit('http://localhost:5173');
    cy.contains('ACIKTIM').click();
    cy.url().should('include', '/order');

    cy.get('input[name="size"][value="M"]').check({ force: true });
    cy.get('select').select('orta');

    cy.get('.topping-row').then(($items) => {
      for (let i = 0; i < 6; i++) cy.wrap($items[i]).click();
    });

    cy.get('textarea').type(`OrtaPizzaNot-${Math.floor(Math.random() * 1000)}`);
    cy.get('.btn-order').click();
    cy.url().should('include', '/success');
  });
});
