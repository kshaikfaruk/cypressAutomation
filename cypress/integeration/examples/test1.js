describe("firstTest",function(){
it("first test",function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(4000)
    cy.get(".products ").find(".product").each(($el,index,$list)=>{
      let text=$el.find("h4.product-name").text()
      if(text.includes("Carrot")){
        cy.wrap($el).find("button").click()
      }
    })
    cy.get("a.cart-icon").find("img").click()

    cy.get(".cart-preview.active").find(".action-block").find("button").click()
    cy.wait(4000)
    cy.get(".promoCode").type("abcd10")
    cy.get('.promoBtn').click()
    cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
    
})
})