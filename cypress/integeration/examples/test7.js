import {pageLocator} from "./page"
import homePage from "./Homepage"
describe("first step",function(){
    it("first step",function(){
       cy.visit(Cypress.env("url")) 
       cy.wait(2000) 
        const homepage= new homePage()
        homepage.getEditBox(pageLocator.firstName).eq(1).type("hello")
        homepage.getEditBox(pageLocator.email).type("hello@gmail.com")
        cy.get(pageLocator.employee).click() 
       cy.get(pageLocator.shop_button).click()
       cy.get(pageLocator.catgeory).should("have.text",'Category 1')
      // Cypress.config('defaultCommandTimeout',4000)
       cy.selectproduct("iphone X")
       cy.selectproduct("Samsung Note 8")
      // cy.get(pageLocator.checkout_button).should('have.text',' Checkout ( 1 )     ')
       cy.get(pageLocator.checkout_button).click()
        var sum=0
        cy.get('td:nth-child(4) > strong').each(($el,index,$list)=>{
      const amount=$el.text();
      var res=amount.split(" ")
      res=res[1].trim()
     sum=Number(sum)+Number(res)
      }).then(function(){
       cy.log(sum)
      })
     var count=0
      cy.get('h3 > strong').each(($el,index,$list)=>{
      const totalamount=$el.text();
      var res1=totalamount.split(" ")
      var rev=res1[1].trim()
      count=Number(rev)
      expect(count).to.equal(sum)
        })
       cy.get('body > app-root > app-shop > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(5)').click()
       cy.get('#country').type("india")
       cy.wait(6000)
       cy.get('.suggestions > ul > li > a').click()
       cy.get('#checkbox2').click({force:true})
       cy.get('.ng-untouched > .btn').click()
      // cy.get(".alert").should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).")4
         // cy.pause()
         cy.get('.alert').then(function(text1){
        let text=text1.text()
       expect(text.includes("Success")).to.be.true
    } )   
    })
})