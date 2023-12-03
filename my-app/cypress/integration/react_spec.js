describe("react getting started page",()=>{
    it("should have a learn react link",()=>{
        cy.visit('http://localhost:3000/');
        cy.get(".App-link").click();
        cy.url().should('include','dogd');

    });
    it("should be titled ",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('head').contains("React App");
    });
    it("should have an icon in the head",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('head link')
        .should('have.attr', 'href', '/favicon.ico')
    });
    describe('List',()=>{
        it("should exist",()=>{
            cy.visit('http://localhost:3000/');
            cy.get('ul').contains('list element 1');
        });
        it('should have 5 elements',()=>{
            cy.visit('http://localhost:3000/');
            cy.get('ul li')
            .its('length')
            .should('be',5);
        });
    })

    describe("dropdown cars menu",()=>{
        it('should have 4 elements',()=>{
            cy.visit('http://localhost:3000');
            cy.get('select option')
            .its('length')
            .should('be', 4);
        });
        it('should contain [Volvo, Saab, Merceded, Audi]',()=>{
            cy.visit('http://localhost:3000');
            cy.get('select').contains('Volvo');
            cy.get('select').contains('Saab');
            cy.get('select').contains('Mercedes');
            cy.get('select').contains('Audi');
        });
        it('should be Selectable',()=>{
            cy.visit('http://localhost:3000');
            cy.get('select').select("Mercedes");
        });
    })
});


