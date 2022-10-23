
export class Category{

    selectProduct(nameOfProduct){
        cy.get('.product-container').contains(nameOfProduct).should('be.visible').click()
    }

}
export const category = new Category()