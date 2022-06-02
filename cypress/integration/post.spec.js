describe('POST /characters', function(){

    it('shoutld create one hero', function(){
        const hero = {
            name: 'Charles Xavier',
            alias: 'Professor X',
            team: ['x-men', 'iluminatis'],
            active: 'true'
        }

        cy.request(
            method: 'POST',
            
        )
    })
})