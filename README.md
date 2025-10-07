# Cypress - OrangeHRM Tests 🍊

Este repositório contém testes automatizados de **login** na aplicação open source
<a href="https://opensource-demo.orangehrmlive.com" target="_blank">OrangeHRM</a>, 
criados com **Cypress**.

## Tecnologias utilizadas
- <a href="https://www.cypress.io/" target="_blank">Cypress</a> para automação de testes E2E  
- <a href="https://nodejs.org/" target="_blank">Node.js</a> para gerenciamento de dependências  

## Casos de teste implementados até o momento
- ✅ Login com credenciais válidas (Admin / admin123) 

- ❌ Login com credenciais inválidas (mensagem de erro exibida)

- 🔄 Atualização de informações do usuário

---

## 🔧 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/gui-coliveira/cypress-orangehrm-tests.git
````

### 2. Acessar a pasta do projeto

```bash
cd cypress-orangehrm-tests
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o Cypress:

- Modo interativo (com interface):
```bash
npx cypress open
```

- Modo headless (sem interface):
```bash
npx cypress run
```
