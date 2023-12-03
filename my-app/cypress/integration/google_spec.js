describe("https://www.google.com/",()=>{
    it("should have a search bar",()=>{
        cy.visit("/");
        cy.get(".gLFyf").type("Hello World{enter}");
        // cy.get(".FPdoLc .gNO89b").click();
        cy.url().should('include', 'search?source=')
    });
});