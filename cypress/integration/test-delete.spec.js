describe('Prueba del Issue ',function() {  

    it('Navegación por portal ucol', function() {    
      cy.visit('http://educ.ddns.net:88/pruebas-cypress/')           
    })  
  
    it('Borrar el primero de directorio', function() {    
      //cy.get('#q').click() 
      //cy.get('#q')
      //  .type('plataforma educ').should('have.value', 'plataforma educ')
       //cy.get('.form-search-ucol').submit() 
       //cy.contains('Borrar').click() 
       //cy.get('.btn-danger').click()
       cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
    })  
      
  })
  
  