describe('Prueba del Issue ',function() {  

    it('Navegación por portal ucol', function() {    
      cy.visit('http://educ.ddns.net:88/pruebas-cypress/')           
    })  
  
    it('Borrar el primero de directorio', function() {    
       cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
    })  
      
  })
  
  