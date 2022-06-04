describe('POST /characters', function(){
    before(function(){
        cy.back2ThePast();
        cy.setToken();
        
    })

    it('shoutld create the hero', function(){

        
        let hero = {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escarlate',
            team: ['Vingadores'],
            active: 'true'
        }
        cy.postHero(hero)
            .then(function(response){
                expect(response.status).to.eql(201);
                expect(response.body.character_id.length).to.eql(24);
        })
        
       
    })

    context("Duplicate registration", function(){
        const hero = {
            name: 'Chales Xavier',
            alias: 'Professor X',
            team: ['X-mem', 'iluminati'],
            active: 'true'
        }

        before(function(){
            cy.postHero(hero).then(function(response){
                expect(response.status).to.eql(201)
            })
    
        })

        it('Do not register duplicate names', function(){
            cy.postHero(hero).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.error).to.eql('Duplicate character')
            })
    
        })
    })
})



