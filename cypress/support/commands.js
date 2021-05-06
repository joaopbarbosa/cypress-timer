/*
* Those are some commands to start and end our counter.
*/

let endPoint, startPoint = null
let timeSpendedSeconds, timeSpendedMinutes, timeSpendedHours  = null

// Command to start counting time
Cypress.Commands.add('startcount', () => {
    startPoint = new Date()
    cy.log('_Start counting time..._')
})

// Command to stop our time counter
Cypress.Commands.add('endcount', (timeFormat) => {
    endPoint = new Date()

    if (timeFormat == 'seconds'){
        timeSpendedSeconds = ((endPoint.getTime() - startPoint.getTime()) / 1000)
        cy.log(`_Time for this test:_ **${timeSpendedSeconds.toFixed(2)} seconds**`)
    }

    else if (timeFormat == 'minutes') {    
        timeSpendedMinutes = (((endPoint.getTime() - startPoint.getTime()) / 1000 ) / 60)
        cy.log(`_Time for this test:_ **${timeSpendedMinutes.toFixed(2)} minutes**`)
    } 

})