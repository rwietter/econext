## Backend

### Arquitetura API RESTful

**REST e RESTful são uma forma de padronização de APIs, com uma diferença que, se a API segue os padrões corretos, ela é denominada uma API RESTful.**

<img src="https://raw.githubusercontent.com/rwietter/e-coleta/master/.github/architecture/NLW%402x.png" width="900px" alt="arquitetura do back-end">

**Ao utilizar o padrão de REST podemos passar apenas os dados para o front-end e mobile, para que, então, esses clientes possam exibir os dados a partir de uma estrutura de dados JavaScript Object Notation (JSON), o qual o back-end serve.**

---

### Tecnologias

- Node^v12.16.1
- Express^4.17.1
- @types/express^4.17.6

---

### Comandos utilizados e configurações

```shell
# inicializa o projeto
yarn init -y
# adiciona o express como dependência
yarn add express
# adiciona a definição de types ao express
yarn add @types/express --dev
# Adiciona o typescript
yarn add typescript --dev
# configura o tsconfig
npx tsc --init
# compila o typeScript
yarn add ts-node --dev
# adiciona um observer para detectar mudanças e recompilar
yarn add ts-node-dev --dev

# eslint + prettier
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```
