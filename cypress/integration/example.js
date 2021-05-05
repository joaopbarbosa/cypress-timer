/*
* This is an example using a simple command to count the time
* spended on a simple it() function.
*/

describe('Example to count time using Cypress.io', () => {

    it('Search on Docs about cy.wait command', () => {
        // Random 5 seconds before we start counting
        cy.wait(5000)

        // Define the point where we are going to start counting
        cy.startcount()

        // Test steps
        cy.visit('https://docs.cypress.io/')
        cy.contains('Search').type('Wait')
        cy.contains('cy.wait').click({force:true})
        cy.url().should('include', '/commands/waiting#wait')

        // Lets add + 5s just to test it
        cy.wait(5000) 

        // Stop the time counting
        cy.endcount() 
    })

    it('Start counting when click on a button', () => {
        // Random 2 seconds before we start counting
        cy.wait(2000)

        // Click to start counting time
        cy.contains('Commands').click().startcount()
        
        // Lets add + 3s just to test it
        cy.wait(3000)

        // Test step
        cy.contains('Navigation').click()

        // Focus and stop time counting
        cy.contains('cy.visit').focus().endcount()
    })

})