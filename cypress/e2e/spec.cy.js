Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
/// <reference types= "cypress" /> 
let userName="ahmad_12"
let password=123456789
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
    cy.get('#loginFrm_loginname').type(userName)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.get(':nth-child(1) > .active').click()

    cy.get('#featured > .container-fluid')
    .find(".productcart")
    .each(() => {
       cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
    });
    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    cy.get('.maintext').should('have.text', ' Your Order Has Been Processed!')

   
  })
})