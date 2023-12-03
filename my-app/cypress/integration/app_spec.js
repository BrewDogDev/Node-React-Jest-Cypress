describe("knowledge base application",()=>{
    it("shows a placeholder",()=>{
        cy.visit("/");
        cy.get("p")
          .should("have.text", "Edit src/App.js and save to reload.");
    });
    it("has a link to react website",()=>{
        cy.visit("/");
        cy.get("a").click();
    });
});