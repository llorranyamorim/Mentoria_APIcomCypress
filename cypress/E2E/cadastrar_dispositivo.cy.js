/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {

    it('Cadastrar dispositivo com sucesso', () => {

        const payload = {
            "name": "Notebook de Lorrany",
            "data": {
                "year": 2026,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };

        cy.request({
            method: "POST",
            url: "/objects",
            body: payload
        }).then((resposta) => {
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).not.to.empty
            expect(resposta.body.createdAt).not.to.empty
            expect(resposta.body.name).to.equal(payload.name)

    });

});
});
