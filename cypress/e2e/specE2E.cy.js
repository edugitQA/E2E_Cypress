/// <reference types="Cypress" />

describe('test E2E Realizando compra de produto com sucesso', function() {
  beforeEach(function() {
    cy.visit("https://www.saucedemo.com/")
  })
//logando no Sistema
it('Fluxo de Compra de Produto', function() {
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('.title').should('contain','Products')
  //Ordenação de produtos de menor para maior Valor
  cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
 //Validação de ordenação desses produtos
  cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Onesie')
  cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light')
  cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt')
 //Adiconando os produtos no carrinho 
  cy.contains('Sauce Labs Onesie').click()
  cy.get('.btn_primary').click()
  cy.get('[data-test="back-to-products"]').click()

  cy.contains('Sauce Labs Bike Light').click()
  cy.get('.btn_primary').click()
  cy.get('[data-test="back-to-products"]').click()

  cy.contains('Sauce Labs Bolt T-Shirt').click()
  cy.get('.btn_primary').click()
  cy.get('[data-test="back-to-products"]').click()
//Checagem da quantidade de Produtos adicionados ao carrinho
  cy.get('.shopping_cart_link').should('have.text', '3')
//Check no carrinho:
  cy.get('.shopping_cart_link').click()
  cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
  cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
  cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')
 //checkout
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type('Teste first Name')
  cy.get('[data-test="lastName"]').type('Teste last Name')
  cy.get('[data-test="postalCode"]').type('73357552')
  cy.get('[data-test="continue"]').click()
 //Validando produtos no checkout
 
      cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
      cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
      cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')

      cy.get('.summary_total_label').should('have.text', 'Total: $36.69')
      cy.get('[data-test="finish"]').click()

  
  

})


 


})


