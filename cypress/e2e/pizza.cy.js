describe('Order Page Testi', () => {
  it('Sipariş formu testi', () => {
    cy.visit('http://localhost:5173/order');

    cy.get('input[name="size"]').eq(1).check();
    cy.get('select').select('orta');
    cy.get('.toppings input[type="checkbox"]').eq(0).check();
    cy.get('.toppings input[type="checkbox"]').eq(1).check();
    cy.get('.toppings input[type="checkbox"]').eq(2).check();
    cy.get('.toppings input[type="checkbox"]').eq(3).check();
    cy.get('textarea[placeholder="Siparişine eklemek istediğin bir not var mı?"]').type('Ekstra peynir ekleyin');

    cy.get('button.btn-order').click();

    cy.url().should('include', '/success');
    cy.contains('SİPARİŞ ALINDI').should('exist');
  });
});
