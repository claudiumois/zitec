
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.get('.login').should('be.visible').click()
    cy.get('#email').should('be.visible').type(email)
    cy.get('#passwd').should('be.visible').type(password)
    cy.get('#SubmitLogin').should('be.visible').click()
    cy.getCookies().then(cookies => {
        cy.writeFile('cypress/fixtures/cookies.json', cookies)
    })
})