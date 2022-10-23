
export class LayerCart{

    clickProceedToCheckout(){
        cy.get('[title="Proceed to checkout"]').should('be.visible').click()
    }

}
export const layerCart = new LayerCart()