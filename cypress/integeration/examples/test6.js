describe('first test',function(){
    before(function(){
        //
        cy.fixture("example").then(function(data){
        this.data=data
        })
    })
it('second test',function(){
cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
cy.get("input[name='name']:nth-child(2)").type(this.data.name)
cy.get('select').select(this.data.gender)
//  cy.get(':nth-child(4) > .ng-untouched').should('have.text',this.data.name)
cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength',2)            
cy.get('#inlineRadio3').should('be.disabled')

// cy.get(':nth-child(2) > .nav-link').click()
// // cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('have.text',' Checkout ( 1 ) ')
// cy.pause()
// this.data.productName.forEach(function(option){
//     console.log(option)
//     cy.selectproduct(option)
//     })
})

})