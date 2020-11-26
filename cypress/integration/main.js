/// <reference types="cypress" />

context('Compare QRCode to minute', () =>{
    beforeEach(() =>{
        cy.visit('/')
    })

    it('Scan QRCODE', () =>{
        cy.get('.link > img')
        .scrollIntoView({timeout:10000})
    })

})