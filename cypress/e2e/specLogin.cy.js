/// <reference types="Cypress" />


describe('test de Login', function() {
  beforeEach(function() {
    cy.visit("https://www.saucedemo.com/")
  })

it('Realizar login com Sucesso', function() {
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('.title').should('contain','Products')
})

it('Validar login com usuário invalido', function() {
  
  cy.get('[data-test="username"]').type("standard_user1")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')

})

it('Validar login com senha incorreta', function() {
  
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce1")
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error').should('contain','Epic sadface: Username and password do not match any user in this service')
});

it('Validar login sem preenchimento dos campos "user" e "password" ', function() {
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error').should('be.visible','Epic sadface: Username and password do not match any user in this service')
});

});






