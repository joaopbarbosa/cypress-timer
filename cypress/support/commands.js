/*
* Those are some commands to start and end our counter.
*/

let endPoint, startPoint, timeSpended = null

// Command to start counting time
Cypress.Commands.add('startcount', () => {
    startPoint = new Date()
})

// Command to stop our time counter
Cypress.Commands.add('endcount', () => {
    endPoint = new Date()
    timeSpended = (endPoint.getTime() - startPoint.getTime()) / 1000
    cy.log(`Time for this test: ${timeSpended} seconds`)
})