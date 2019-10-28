describe('Prueba del Issue ',function() {  

    it('Navegación por portal ucol', function() {    
      cy.visit('http://local.maincol.com/practica2-mosqueda/')           
    })  
  
    it('Borrar el primero de directorio', function() {    
      //cy.get('#q').click() 
      //cy.get('#q')
      //  .type('plataforma educ').should('have.value', 'plataforma educ')
       //cy.get('.form-search-ucol').submit() 
       //cy.contains('Borrar').click() 
       //cy.get('.btn-danger').click()
       cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(2) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(3) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(4) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(5) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(6) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(7) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(8) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(9) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(10) > :nth-child(5) > .btn-danger').click()
       cy.get(':nth-child(11) > :nth-child(5) > .btn-danger').click()
    })  
      
  })
  
  