describe('pizzaLarge', () => {
  it('L boyut, kalın hamur, 8 malzeme, rastgele not ve success kontrolü', () => {
    cy.visit('http://localhost:5173');
    cy.contains('ACIKTIM').click();
    cy.url().should('include', '/order');

    cy.get('input[name="size"][value="L"]').check({ force: true });
    cy.get('select').select('kalın');

    cy.get('.topping-row').then(($items) => {
      for (let i = 0; i < 8; i++) cy.wrap($items[i]).click();
    });

    cy.get('textarea').type(`BuyukPizzaNot-${Math.floor(Math.random() * 1000)}`);
    cy.get('.btn-order').click();
    cy.url().should('include', '/success');
  });
});
