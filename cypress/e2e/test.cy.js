/// <reference types="cypress" />
// This test case spec runs a traditional test against the ACME bank site.

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
describe('Test for https://automationpanda.com/', () => {

  beforeEach(() => {
    cy.viewport(1600, 1200)
  }) 

  // This test covers login for the Applitools demo site, which is a dummy banking app.
  // The interactions use typical Cypress calls,
  // but the verifications use one-line snapshot calls with Applitools Eyes.
  // If the page ever changes, then Applitools will detect the changes and highlight them in the dashboard.
  // Traditional assertions that scrape the page for text values are not needed here.
  it('should load panda site', () => {

    // Load the login page
    cy.visit('https://automationpanda.com/')



    cy.get('title').contains('Automation Panda').should('be.visible')
    cy.get('a').contains('Speaking').should('be.visible')
    cy.get('a').contains('Speaking').click();
 
    cy.get('h2').contains('Keynote Addresses').should('be.visible')

    })


})