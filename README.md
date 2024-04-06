## Testes automatizados com Cypress

## Site Utilizado

O teste foi realizado no site [Sauce Demo](https://www.saucedemo.com/).


### Pagina de login
| Número | Cenários                                                             |
|--------|---------------------------------------------------------------------|
| 1      |  **Realizar login com Sucesso**: valida se login é bem-sucedido usando credenciais de usuário válidas. |
| 2      |  **Validar login com usuário invalido**: Valida se sistema exibe mensagem de preenchimento de usuário não corresponde e não realiza o login |
| 3      |  **Validar login com senha incorreta**: Valida se sistema exibe mensagem de preenchimento de senha não corresponde e não realiza o login |
| 5      |  **Validar login sem preenchimento dos campos "user" e "password"**: Valida se sistema exibe mensagem de preenchimento obrigartorio dos campos e não realiza login|


# E2E - Efetuando a compra de produtos com sucesso
| Número | Cenários                                                             |
|--------|---------------------------------------------------------------------|
| 1      | ✔️ **Login bem-sucedido**: O teste inicia com um login bem-sucedido usando credenciais de usuário válidas. |
| 2      | 🛒 **Ordenação de produtos**: Os produtos são ordenados do menor para o maior preço. |
| 3      | 🔄 **Validação da ordenação**: Verifica se os três primeiros produtos na lista estão corretamente ordenados. |
| 4      | ➕ **Adição de produtos ao carrinho**: Três produtos específicos são adicionados ao carrinho. |
| 5      | 🛒 **Verificação da quantidade de produtos no carrinho**: Verifica se a quantidade de produtos no carrinho é correta. |
| 6      | ✅ **Verificação dos produtos no carrinho**: Verifica se os produtos adicionados estão corretamente listados no carrinho. |
| 7      | 🛒 **Checkout**: Realiza o processo de checkout, preenchendo os dados de cliente necessários. |
| 8      | 💵 **Verificação do valor total**: Verifica se o valor total no checkout corresponde ao esperado. |
| 9      | 🎉 **Finalização da compra**: Finaliza a compra clicando no botão de finalização. |
| 10     | 📩 **Verificação da mensagem de agradecimento**: Verifica se a mensagem de agradecimento pela compra é exibida corretamente. |



## Pré-requisitos
Antes de executar o teste, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código-fonte.
- [Cypress](https://www.cypress.io/): Ferramenta de automação de teste de front-end.

### Executando os Testes
Para abrir o Cypress Test Runner, execute o seguinte comando:
Copy code
npm run cypress:open
Selecione o arquivo de teste desejado em cypress/integration.


### Autor
Eduardo Alves - linkedin https://www.linkedin.com/in/eduardo-alves95/
