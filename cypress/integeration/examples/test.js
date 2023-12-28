describe("first test",function(){
    it("login to application",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(4000)
       cy.get(".product:visible").should("have.length",4)
       cy.get(".products").as("productlocator")
    //    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
        cy.get("@productlocator").find(".product").each(($el, index, $list) => {
  // $el is a wrapped jQuery element
  let text=$el.find("h4.product-name").text()
  if (text.includes('Cashews - 1 Kg')) {
    cy.wrap($el).find('button').click()
  } else {
    // do something else
  }
    })
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())
    })
    //const text=cy.get('.brand').text() 

})
})