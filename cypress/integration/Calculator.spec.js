/// <reference types="Cypress" />

describe('Calculator Functionality', () =>{

    it('Navigate to calculator', () => {
        cy.server()
        .visit("/personal-banking/home-loans/calculators")
    })
})