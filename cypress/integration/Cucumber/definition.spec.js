Given('Abrir google Chrome',()=>{
    cy.visit("http://10.0.0.16:5005")

})
When('Cargamos el nombre de usuario',()=>{
    cy.get('#email').type('helpcom@helpcom.cl')
    cy.wait(300)

})
When('Cargamos el passwoord del usuario',()=>{
    cy.get('#password').type('helpcom211')
    cy.wait(300)

})
Then('Presionamos el boton login',()=>{
    cy.get('#signin').click()

})

