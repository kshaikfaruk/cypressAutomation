 //<reference typse="cypress"/> 
// <reference typse="Cypress-iframe"/>
import 'cypress-iframe' 
describe("firsttest",function(){
    it("first test",function(){
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.wait(4000)
     cy.get("input[name='username']").type("Admin")
     cy.get("input[name='password']").type("admin123")
     cy.get('button').click()
     cy.wait(1000)
     cy.get('.orangehrm-dashboard-widget-name .oxd-text.oxd-text--p').eq(0).should('have.text','Time at Work')
    cy.get("li a").eq(2).click()
    // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(1) > div > div > label > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.wait(4000)
    cy.get('div.oxd-select-dropdown.--positon-bottom div.oxd-select-option span').each(($el, index, $list) => {
    if($el.text()==='CAN - Matternity')
    {
    cy.wrap($el).click()    
    } 
    })
   cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').should("have.text",'CAN - Matternity')
//    cy.get('.oxd-button.oxd-button--medium.oxd-button--label-danger.oxd-table-cell-action-space').eq(1).click()
//    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(1)').check().should('be.checked')
   cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a').click()
   cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(1) > div > div > label > span > i').click()
   cy.get('nav[aria-label="Topbar Menu"] ul li:nth-child(3) a').click()
   cy.get('.oxd-userdropdown-tab').click()
   cy.get("a[href*='/logout']").click()
   cy.wait(5000)
     })
    })