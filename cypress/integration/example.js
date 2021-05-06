/*
* This is an example using a simple command to count the time
* spended on a simple it() function.
*/

describe('Example to count time using Cypress.io', () => {

    it('Simple count time (example in seconds)', () => {
        // Random 5 seconds before we start counting
        cy.wait(5000)

        // Define the point where we are going to start counting
        cy.startcount()

        // Test steps
        cy.visit('https://docs.cypress.io/')
        cy.contains('Search').type('Wait')
        cy.contains('cy.wait').click({force:true})

        // Lets add + 5s just to test it
        cy.wait(5000) 

        // Stop the time counting in seconds
        cy.endcount('seconds') 
    })

    it('Count time when do something (example in minutes)', () => {
        // Random 2 seconds before we start counting
        cy.wait(2000)

        // Click to start counting time
        cy.contains('Commands').click().startcount()
        
        // Lets add + 60s just to test it
        cy.wait(60000)

        // Test step
        cy.contains('Navigation').click()

        cy.wait(10000)

        // Focus and stop time counting in minutes
        cy.contains('cy.visit').focus().endcount('minutes')
    })

})