const { blockTopMenu } = require("../support/components/blockTopMenu")
const { layerCart } = require("../support/components/layerCart")
const { category } = require("../support/pageObjects/category")
const { order } = require("../support/pageObjects/order")
const { product } = require("../support/pageObjects/product")

describe('Order Placement Process', () => {
    before('logs in',() => {
        cy.readFile('cypress/fixtures/credentials.json').then(credentials => {
            cy.login(credentials.email, credentials.password)
        })
    })

    beforeEach('keeps the user logged',() => {
        cy.readFile('cypress/fixtures/cookies.json').then(cookies => {
            cy.setCookie(`${cookies[0].name}`, cookies[0].value)
        })
    })

    it('choses a product',() => {
        blockTopMenu.select('Women')
        category.selectProduct('Faded Short Sleeve T-shirts')
        product.addToCart()
        layerCart.clickProceedToCheckout()
    })

    it('completes the order',() => {
        order.clickProceedToCheckout()
        order.clickProceedToCheckout()
        order.acceptTermsOfService()
        order.clickProceedToCheckout()
        order.validateTotalPrice()
    })

    it('selects the type of payment and confirm de order',() => {
        order.selectPayment('Pay by check')
        order.confirmOrder()
    })
})