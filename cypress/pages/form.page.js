/// <reference types="cypress-xpath" />

class formPage{

    elements= {
        userMail: () => cy.get('#email'),
        userPass: () => cy.get('#password'),
        loginBtn:() => cy.get('#signin'),
        companyName:()=> cy.get(':nth-child(2) > .form-control'),
        officeName:()=> cy.get(':nth-child(3) > .form-control'),
        yearSelection:()=>cy.get(':nth-child(4) > .form-control'),
        monthSelection:()=>cy.get(':nth-child(5) > .form-control'),
        selectbtn:()=> cy.get('.btn-info'),
        //botones menu lateral 
        //Menu comprobante
        sideMenuComprobantes:()=>cy.get(':nth-child(2) > .el-submenu__title'),
        //Sub menu nuevo docuemnto
         sideSubMenuDocVentas:()=>cy.get('.is-opened > .el-menu > :nth-child(2)'),
        //creacion nuevo documento
        btnNuevoDoc:()=>cy.get('.btn-group > .btn'),
        typeRutCliente:()=>cy.get('.col-md-4 > .el-autocomplete > .el-input > .el-input__inner'),
        clickOn:()=>cy.xpath("//li[contains(text(),'Mauricio Gutiérrez')]"),
        docType:()=>cy.xpath("//html[1]/body[1]/div[1]/section[1]/section[1]/main[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/select[1]"),
        numberDoc:()=> cy.get(':nth-child(2) > .card > .card-body > :nth-child(3) > :nth-child(2) > .form-control'),
        selectDateIn:()=>cy.get(':nth-child(2) > .card > .card-body > :nth-child(3) > :nth-child(3) > .form-control'),
        selectDateOut:()=>cy.get(':nth-child(4) > .form-control'),
      
        //ventana valores
        afectoValue:()=>cy.xpath("/html[1]/body[1]/div[1]/section[1]/section[1]/main[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"),
        //codigo cuenta 410101001
        accountValue:()=>cy.get('.col-sm-3 > .el-autocomplete > .el-input > .el-input__inner'),
        centerCostValue:()=>cy.xpath("/html/body/div[1]/section/section/main/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[2]/div/div/input"),
        exemptValue:()=>cy.xpath("/html[1]/body[1]/div[1]/section[1]/section[1]/main[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]"),
        
        //ventana impuestos adicionales
        selectImp:()=> cy.xpath("//span[contains(text(),'LICORES 31.5%')]"),
        valueImp:()=>cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .card > .card-body > :nth-child(2) > :nth-child(2) > .form-control'),
        btnOk:()=>cy.get(':nth-child(2) > :nth-child(3) > .form-control'),

        //Acciones en ventana principal
        btnSave:()=>cy.xpath("//button[contains(text(),'Guardar')]")
        
    }
    typeUserMail(user){
        this.elements.userMail().type(user)
    }
    typeUserPass (pass){
        this.elements.userPass().type(pass)
    }
    pressLoginBtn(){
        this.elements.loginBtn().click()
    }
    selectCompany(){
        this.elements.companyName().select('COMERCIAL AMAR HERMANOS Y COMPAÑIA LIMITADA')
    }
    selectOfficeName(){
        this.elements.officeName().select('Trebol - Luis Duran')
    }
    selectYearSelection(){
        this.elements.yearSelection().select('2020')
    }
    selectMonthSelecction(){
        this.elements.monthSelection().select('Enero')
    }
    pressSelectBtn(){
        this.elements.selectbtn().click()
    }
    pressMenuComprobantes(){
        this.elements.sideMenuComprobantes().click()
    }
    pressSubMenuDocVentas(){
        this.elements.sideSubMenuDocVentas().click()
    }
    pressBtnNuevoDoc(){
        this.elements.btnNuevoDoc().click()
    }

    //ventana identificacion del documento
    typeRutCliente(rutCliente){
        this.elements.typeRutCliente().type(rutCliente)
    }
    clickOn(){
        this.elements.clickOn().click()
    }
    selectDocFact(){
        this.elements.docType().select('Factura Electrónica')
    }
    typeNumberDoc(numberDoc){
        this.elements.numberDoc().type(numberDoc)
    }
    typeSelectDateIn(date){
        this.elements.selectDateIn().type(date,{force:true})
    }
    typeSelectDateOut(date2){
        this.elements.selectDateOut().type(date2,{force:true})
    } 
    typeAfectoValue(value){
        this.elements.afectoValue().type(value,{force:true})
    }
    typeAccountValue(value2){
        this.elements.accountValue().type(value2,{force:true})
    }
    /*selectCenterCostValue(){
        this.elements.centerCostValue().select('Traigen')
    }*/
    typeExemptValue(value3){
        this.elements.exemptValue().type(value3,{force:true})
    }
    //ventana impuestos adicionales
    selectionSelectImp(){
        this.elements.selectImp().click({force:true})
    }
    selectValueImp(value4){
        this.elements.valueImp().type(value4,{force:true})
    }
    pressBtnOk(){
        this.elements.btnOk().click({force:true})
    }
    pressBtnSave(){
        this.elements.btnSave().click({force:true})
    }
    
}
module.exports= new formPage()
