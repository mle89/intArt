import "../customCucumberExpressions"
import { Given , When , Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginAiScholar } from "../page_objects/aischolar_login";

const aiScholar = new loginAiScholar();

Given('{user} is logged in as {string}', (user: string, role:string) => {
  aiScholar.logginByFront(user,role);
  cy.intercept("POST",'/api/authenticate').as("reqAuthen")
  cy.get('[data-cy="submit"]').click()

  
});

When("{user} is connected", () => {
  cy.wait("@reqAuthen").then((res)=>{
    const returnedStatus = res.response.statusCode
    cy.wrap(returnedStatus).as("returnedStatus")
    })
    cy.get("@returnedStatus").should("deep.equal",200)
});