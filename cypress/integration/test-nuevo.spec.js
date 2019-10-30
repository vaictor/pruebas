describe('Prueba del nuevo ',function() {  

    it('Navegación por portal ucol', function() {    
      cy.visit('http://educ.ddns.net:88/pruebas-cypress/')           

      cy.get("#btnAddPerson")
        .click()
    })  

      
  })
  
  