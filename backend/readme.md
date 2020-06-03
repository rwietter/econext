## Backend

### Arquitetura API RESTful

**REST e RESTful são uma forma de padronização de APIs, com uma diferença que, se a API segue os padrões corretos, ela é denominada uma API RESTful.**

<img src="https://raw.githubusercontent.com/rwietter/e-coleta/master/.github/architecture/NLW%402x.png" width="900px" alt="arquitetura do back-end">

**Ao utilizar o padrão de REST podemos passar apenas os dados para o front-end e mobile, para que, então, esses clientes possam exibir os dados a partir de uma estrutura de dados JavaScript Object Notation (JSON), o qual o back-end serve.**

---

### Tecnologias

- Node^v12.16.1
- Express^4.17.1
- Cors^2.8.5

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
# adiciona o query builder Knex
yarn add knex
# adiciona o database sqlite3
yarn add sqlite3
# executa as migrations
npx knex --knexfile knexfile.ts migrate:latest
# executa os seeds, que inserem dados padrões ao dB
npx knex --knexfile knexfile.ts seed:run
# adiciona o cors
yarn add cors

# eslint + prettier
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev

# Husky + lint-staged
yarn add husky --dev
yarn add lint-staged --dev
```

---

### Rotas

- É o endereço completo da requisição
- Recurso: a entidade do sistema que é utilizado
  `http://localhost:3333/{recursos}`

---

### HTTP

- **GET** > _buscar alguma informação do back-end_
- **POST** > _criar uma informação no back-end_
- **PUT** > _alterar uma informação no back-end_
- **DELETE** > _deletar uma informação no back-end_

```javascript
app.get('/users', (request, response) => {
  const titles = request.query
  return response.json({
    titles.name,
    title.description
  })
})
/* request === guarda os dados da requisição */
/* response === retorna os dados de resposta */
```

---

### Tipos de parâmetros

#### Query parms

- São parâmetros nomeados que são enviados na rota após a interrogação. Servem para fazer paginação e filtros

`http://localhost:3333/users?title=westworld`

```javascript
app.get('/user', (req, res) => {
  const search = req.query.search;
  return res.json(user);
});
```

#### Route parms

- São parâmetros utilizados para identificar recursos
- Buscar dados de um único usuário
  `/users/:id`

```javascript
app.get('/users:id', (request, response) => {
  const params = request.params
  return response.json({
    params.id,
  })
})
```

#### Request body

- O corpo da requisição é utilizado para criar ou alterar recursos

```javascript
app.use(express.json()); // use querys in json format

app.post('/users', (request, response) => {
  const body = request.body;
  return response.json({
    body.name,
  });
});
```

```json
// POST http://localhost:3333/users
{
  "name": "Fish",
  "age": 25
}
```
