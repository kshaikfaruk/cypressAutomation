describe("firstTest",function(){
    it("first test",function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get("[id='alertbtn']").click()
    cy.on('window:alert',(str)=>{
        expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })
    
    cy.get("[id='confirmbtn']").click()
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal("Hello , Are you sure you want to confirm?")
    })
})
})