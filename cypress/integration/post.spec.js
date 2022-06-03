describe('POST /characters', function(){
    before(function(){
        cy.request({
            method: 'POST',
            url: '/sessions',
            body:{
                email: 'israelalvesdesign@gmail.com',
                password: 'guerra13'
            }
        }).then(function(response){
            expect(response.status).eql(200)
            cy.log(response.body.token)
            Cypress.env('token', response.body.token)
        })

        cy.request({
            method:'DELETE',
            url: 'back2thepast/'+Cypress.env('id')
        }).then(function(response){
            expect(response.status).to.eql(200)
        })
    })

    it('shoutld create one hero', function(){

        
        let hero = {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escarlate',
            team: ['Vingadores'],
            active: 'true'
        }

        cy.request({
            method: 'POST',
            url: '/characters',
            body: hero,
            headers:{
                Authorization: Cypress.env('token')
            }   
        }).then(function(response){
            expect(response.status).to.eql(201);
        })
    })
})