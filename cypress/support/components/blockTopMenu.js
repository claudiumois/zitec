
export class BlockTopMenu{

    select(tab){
        cy.get('#block_top_menu').contains(tab).should('be.visible').click()
    }


}
export const blockTopMenu = new BlockTopMenu()