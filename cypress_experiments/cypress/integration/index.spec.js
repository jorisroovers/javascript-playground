// Add this reference comment for IDE to do correct code completions
/// <reference types="Cypress" />
context('Index', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("has the right h1 text", () => {
        // simple assertion that h1 tag has the right text
        cy.get("h1").should("contain", 'Hello Cypress')

        // Take a screenshot (saved in `screenshots` directory).
        // Note that cypress takes screenshots automatically on assertion failures, this is just an explicit way
        // You can also record video
        cy.screenshot()
    })


    it("should update div text 2 sec after clicking button", () => {
        // Assert for start text
        cy.get("#mydiv").should("contain", 'This text will change when the button below is clicked')
        // Click button
        cy.get('button').click()

        // Assert new text. If you look at the index.js source-code, you'll notice that we actually introduced a 2 sec
        // delay there before showing this text. Cypress is smart enough however to just wait for the text without us
        // to have to do anything like a timeout or something.
        cy.get("#mydiv").should("contain", 'Foobar')
    })
})