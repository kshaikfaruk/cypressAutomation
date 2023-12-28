 //<reference typse="cypress"/> 
// <reference typse="Cypress-iframe"/>
 import 'cypress-iframe' 
describe("firsttest",function(){
    it("first test",function(){
     cy.visit("https://rahulshettyacademy.com/AutomationPractice")
     cy.get('#opentab').invoke("removeAttr",'target').click()
     cy.origin('https://www.qaclickacademy.com/',()=>{
     cy.get(".nav-item a[href*='about']").click()
     cy.wait(1000)
     cy.get('.page-banner-cont h2').then(function(header){
        let text=header.text()
        if (text.includes('About')){
            console.log("text is matched")
        }
     })
     })
    //  cy.frameLoaded("iframe#courses-iframe")
    //  cy.iframe().find("a[href='mentorship']").eq(0).click().should('have.text','Mentorship')
    //  cy.wait(1000)
    // cy.iframe().find('body > div > section.page-title > div > div > h1').then(function(header){
    //     cy.log(header.text())
    //   })
    })
})