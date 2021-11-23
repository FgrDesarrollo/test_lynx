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
        //ventana identificacion del documento
        formPage.typeRutCliente('19478666-2')
        formPage.clickOn()
        formPage.selectDocFact()
        formPage.typeNumberDoc('1234')
        formPage.typeSelectDateIn('2021-11-23')
        formPage.typeSelectDateOut('2021-12-05')
        //ventana valores
        formPage.typeAfectoValue('2990')
        formPage.typeAccountValue('410101001')
        //formPage.selectCenterCostValue()
        formPage.typeExemptValue('2990')
        //ventana impuestos adicionales
        formPage.selectionSelectImp()
        formPage.selectValueImp('4990')
        formPage.pressBtnOk()

        formPage.pressBtnSave()


        

    })
  
})