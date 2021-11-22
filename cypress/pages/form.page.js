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
        //clickOn:()=>cy.get('.col-md-4 > .el-autocomplete > .el-input > .el-input__inner'),
        clickOn:()=>cy.xpath("//html[1]/body[1]/div[5]/div[1]/div[1]/ul[1]/li[1]"),
        //clickOn:()=>cy.xpath("//li[@class='el-autocomplete-4845-item-0']"),
        numberDoc:()=> cy.get(':nth-child(2) > .card > .card-body > :nth-child(3) > :nth-child(2) > .form-control'),
        selectDateIn:()=>cy.get(':nth-child(2) > .card > .card-body > :nth-child(3) > :nth-child(3) > .form-control'),
        selectDateOut:()=>cy.get(':nth-child(4) > .form-control'),
        selectImp:()=>cy.get('.col-md-5 > .el-select > .el-input > .el-input__inner'),
        valueImp:()=>cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .card > .card-body > :nth-child(2) > :nth-child(2) > .form-control'),
        btnOk:()=>cy.get(':nth-child(2) > :nth-child(3) > .form-control'),
        accountValue:()=>cy.get('.col-sm-3 > .el-autocomplete > .el-input > .el-input__inner')


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
    typeRutCliente(rutCliente){
        this.elements.typeRutCliente().type(rutCliente)
    }
    clickOn(){
        this.elements.clickOn().click(817, 199)
    }
    typeNumberDoc(numberDoc){
        this.elements.numberDoc().type(numberDoc)
    }
    typeSelectDateIn(date){
        this.elements.selectDateIn().type(date)
    }
    typeSelectDateOut(dateOut){
        this.elements.selectDateOut().type()
    }
    selectImp(){
        this.elements.selectImp().select('CARNES 19%')
    }
    pressBtnOk(){
        this.elements.btnOk().click()
    }






    
}
module.exports= new formPage()
