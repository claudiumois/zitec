
export class Product {

    addToCart() {
        cy.intercept('/index.php?rand=**').as('addToCart')
        cy.get('[type="submit"]').contains('Add to cart').should('be.visible').click()
        cy.wait('@addToCart').then(xhr => {
            expect(xhr.response.statusCode).to.equal(200)
            cy.get('#layer_cart').should('be.visible').and('contain', 'Product successfully added to your shopping cart')
        })
    }

}
export const product = new Product()