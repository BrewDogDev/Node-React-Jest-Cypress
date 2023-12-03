import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000"
Given('I open the App',()=>{
    cy.visit(url);
});
Then("I select {string}",(car)=>{
    cy.get('select').select(car);
});