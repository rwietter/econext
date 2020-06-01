## Projeto E-coleta

### O projeto **E-coleta** é voltado para fins ecológicos. Com um mapa integrado podemos localizar resíduos para que possam ser recolhidos por empresas e entidades especializada nisso. Nesse sentido, ele visa auxiliar empresas e entidades que coletam resíduos orgânicos ou inorgânicos que as pessoa precisam descartar em algum momento, mas, não sabem onde descartá-lo e a forma ecologicamente correta de fazer isso. Por exemplo, a separação do lixo plástico, de pilhas, de baterias e de eletrônicos entre outros.

---

## Backend

### Arquitetura API RESTful

**REST e RESTful são uma forma de padronização de APIs, com uma diferença que, se a API segue os padrões corretos, ela é denominada uma API RESTful.**

<img src="./.github/archtecture/NLW@2x.png" width="800px" alt="arquitetura do back-end">

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
# adiciona o express
yarn add express
# adiciona a definição de types ao express
yarn add @types/express --dev
# Adiciona o typescript
yarn add typescript --dev
# configura o tscondig
npx tsc --init
# compila o typescript
yarn add ts-node --dev
# adiciona um observer para detectar mudanças e recompilar
yarn add ts-node-dev --dev

# eslint + prettier
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```
