import formPage from '/cypress/pages/form.page.js';

describe('Test en Login y documentos de ventas de Lynx',()=>{
    beforeEach(()=>{
        cy.visit('http://10.0.0.16:5005/')
    })
    it('El usuario se logea exitosamente y completa campos requeridos al inicio ',()=>{
        formPage.typeUserMail('helpcom@helpcom.cl')
        formPage.typeUserPass('helpcom211')
        formPage.pressLoginBtn()
        formPage.selectCompany()
        formPage.selectOfficeName()
        formPage.selectYearSelection()
        formPage.selectMonthSelecction()
        formPage.pressSelectBtn()
        formPage.pressMenuComprobantes()
        formPage.pressSubMenuDocVentas()
        formPage.pressBtnNuevoDoc()
        formPage.typeRutCliente('19478666-2')
        formPage.clickOn(817, 199)
        formPage.typeNumberDoc('1234')
        formPage.typeSelectDateIn('1999-12-31')
        formPage.typeSelectDateOut('1999-12-31')
        formPage.selectImp()
        formPage.pressBtnOk()

        

    })
  
})