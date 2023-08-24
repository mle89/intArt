const testData = require('../../fixtures/users_dev.json') 

export class loginAiScholar {
  

  private webElements = {
    txtBoxUserName: () =>  cy.get('[data-cy="username"]'),
    txtBoxPassWord: () =>  cy.get('[data-cy="password"]'),
    btnSubmit: () =>  cy.get('[data-cy="submit"]'),
  }

  logginByFront (user: string, role:string) {
    const url = Cypress.env("dev").BASE_URL + '/login'
    cy.visit(url)
    expect(role).to.be.equal(testData[user].role)
    this.webElements.txtBoxUserName().type(testData[user].username)
    this.webElements.txtBoxPassWord().type(testData[user].password)
  }
}