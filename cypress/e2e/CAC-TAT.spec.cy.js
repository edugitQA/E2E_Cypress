/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function() {
  cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
  })

  it('Validando preenchimento dos campos obrigatorios e eviando form', function() {
    const longtest = 'teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,'
    cy.get('#firstName').type('EDUARDO')
    cy.get('#lastName').type('ALVES')
    cy.get('#email').type('EDU@GMAIL.COM')
    cy.get('#phone').type('62999999999')
    cy.get('#open-text-area').type(longtest, {delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('Validando form com email invalido', function() {
    cy.get('#firstName').type('EDUARDO')
    cy.get('#lastName').type('ALVES')
    cy.get('#email').type('EDU@GMAIL,COM')
    cy.get('#phone').type('62999999999')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('Validando campo phone com caractere não numericos', function() {
    cy.get('#phone')
    .type('NUMERO')
    .should('have.value', '')
  })

  it('Validando form sem preenchinento do campo phone quando check-box phone for marcada', function() {
    cy.get('#firstName').type('EDUARDO')
    cy.get('#lastName').type('ALVES')
    cy.get('#email').type('EDU@GMAIL.COM')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('Preenche e limpa os campos nome,sobrenome,email e telefone', function(){
    cy.get('#firstName')
    .type('Edu')
    .should('have.value', 'Edu')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .type('Alves')
    .should('have.value', 'Alves')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .type('Edu@gmail.com')
    .should('have.value', 'Edu@gmail.com')
    .clear()
    .should('have.value', '')

    cy.get('#phone')
    .type('6198652368')
    .should('have.value', '6198652368')
    .clear()
    .should('have.value', '')

    cy.get('#open-text-area')
    .type('teste')
    .should('have.value', 'teste')
    .clear()
    .should('have.value', '')
  })

  it('Validar form sem preenchimento de campos obrigatórios', function(){
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
})
