export class sideBarAiScholar {
  

  private webElements = {
  txtWelcomeMessage: ()=>  cy.get('.display-4 > span'),
  txtWelcomeShdes: () => cy.get('.lead'),
  txtAuthenticationSatus : () => cy.get('.alert'),
          Home : {},
   Enseignant : {},
   Administrateur:{},
   AiBoost:{ }
  }

  checkSideBarComponents () {
   this.webElements.txtWelcomeMessage().should('be.visible').contains("Welcome, AI-SCHOLAR"),
   this.webElements.txtWelcomeShdes().should('be.visible').contains("Fast, accurate, and efficient exam generation and correction!"),
   this.webElements.txtAuthenticationSatus().should('be.visible').should('have.css',"background-color","rgb(212, 237, 218)")
  }
}