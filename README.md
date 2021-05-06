# cypress-timer
As a Test Automation Engineer working with Cypress.io I've been strugling to find some solutions for my problems. 
This was one of my first challenges, trying to find a way to create a counter for each specific it() test in Cypress.io. On this way
I'm sharing with all of you a project demo were I create some comands to facilitate this process to start our timer counting and end the 
timer giving us a log in seconds or in minutes. Here it is a quick example to show you how to use it.


## Usage
`cypress-timer` extends Cypress' `cy` command.

To start counting the time:
```javascript
cy.startcount()
```
To finish the counter, you can select if you want the result in seconds or in minutes:
```javascript
cy.endcount('seconds')
cy.endcount('minutes')
```
Quick example:
```javascript
describe('Quick cypress-timer example', () => {
    it('Simple count time (example in seconds)', () => {
        cy.startcount()
        cy.wait(5000) 
        cy.endcount('seconds') 
    })
    it('Count time when do something (example in minutes)', () => {
        cy.visit('https://randomcypresstimerwebpage.test/')
        cy.contains('Start Button').click().startcount()
        cy.wait(60000)
        cy.contains('Stop Button').endcount('minutes')
    })
})
```
✅ Simple count time (example in seconds)
>_Time for this test:_ **5.00 seconds**

✅ Count time when do something (example in minutes)
>_Time for this test:_ **1.00 minutes**
