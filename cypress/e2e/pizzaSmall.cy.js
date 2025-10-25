describe('pizzaSmall', () => {
  it('S boyut, ince hamur, 4 malzeme, rastgele not ve success kontrolü', () => {
    cy.visit('http://localhost:5173');
    cy.contains('ACIKTIM').click();
    cy.url().should('include', '/order');

    cy.get('input[name="size"][value="S"]').check({ force: true });
    cy.get('select').select('ince');

    cy.get('.topping-row').then(($items) => {
      for (let i = 0; i < 4; i++) cy.wrap($items[i]).click();
    });

    cy.get('textarea').type(`KüçükPizzaNot-${Math.floor(Math.random() * 1000)}`);
    cy.get('.btn-order').click();
    cy.url().should('include', '/success');
  });
});
