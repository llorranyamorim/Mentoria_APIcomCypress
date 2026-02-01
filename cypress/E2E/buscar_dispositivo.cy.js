/// <reference types="cypress"/>

describe('Buscar dispositivos', () => {

    it('Buscar dispositivo existente', () => {
        cy.request({
            method: 'GET',
            url: '/objects/3'
        })
            .then((resposta) => {
                expect(resposta.status).to.equal(200)
                expect(resposta.body.id).to.equal('3')
                expect(resposta.body.name).to.equal('Apple iPhone 12 Pro Max')
            });
    })

    it('Buscar dispositivo inexistente', () => {
        cy.request({
            method: 'GET',
            url: '/objects/33',
            failOnStatusCode: false
        })
            .then((resposta) => {
                expect(resposta.status).to.equal(404)
                expect(resposta.body.error).to.equal('Oject with id=33 was not found.')
            });
    })
})
