
export class Order {

    clickProceedToCheckout() {
        cy.get('.cart_navigation').contains('Proceed to checkout').click()
    }

    acceptTermsOfService() {
        cy.get('[type="checkbox"]').check()
    }

    validateTotalPrice() {
        cy.get('#total_product').should('be.visible').then($totalProducts => {
            cy.get('#total_shipping').should('be.visible').then($totalShipping => {
                var totalPricePerProducts = $totalProducts.text().replace('$','')
                var totalPricePerShipping = $totalShipping.text().replace('$','')
                var total = +totalPricePerProducts + +totalPricePerShipping
                cy.get('#total_price').should('contain', `$${total}`)
            })
        })
    }

    selectPayment(payment){
        cy.get('.payment_module').contains(payment).should('be.visible').click()
    }

    confirmOrder() {
        cy.get('.cart_navigation').contains('I confirm my order').should('be.visible').click()
        cy.get('.alert-success').should('contain', 'Your order on My Store is complete.')
    }

}
export const order = new Order()