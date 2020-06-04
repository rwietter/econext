### Front-end - Reactjs

**Para criar o cliente web da aplicação, utilizaremos ReactJS. O React é uma biblioteca que fornece APIs para manipular o DOM (_Document Object Model_) do navegador, ele traz o conceito de _single page application_, isto é, uma aplicação de página única, onde uma única página serve toda a aplicação, por exemplo, podemos ir da home para o perfil sem recarregar toda a página, isto porque o React só altera o estado do DOM que foi alterado no componente, ou seja, podemos ir da home ao perfil e manter o header e o footer da mesma forma, assim, só altera o main. Com isso, as aplicações web ganham mais desempenho e entregam uma melhor experiência de utilização ao usuário final.**

**Além disso, ele traz o conceito de componentização, que nada mais é do que trabalhar a interface em partes separadas, onde as partes que se repetem como um _button_, podem se tornar um componente reutilizável.**

<br/>
<br/>

<div align="center">
<img  width="800px" src="./.github/Animação.gif" />
</div>

<br/>
<br/>
---

### Tecnologias

- [react^16.13.1]()
- [typescript^3.7.2]()

### Libraries

- [axios^0.19.2]()
- [leaflet^1.6.0]()
- [react-Icons^3.10.0]()
- [react-leaflet^2.7.0]()
- [react-router-dom^5.2.0]()
- [styled-components^5.1.1]()

### Styles

- [eslint^6.8.0]
- [eslint-config-airbnb^18.1.0]()
- [eslint-config-prettier^6.11.0]()
- [eslint-plugin-import^2.20.2]()
- [eslint-plugin-jsx-a11y^6.2.3]()
- [eslint-plugin-prettier^3.1.3]()
- [eslint-plugin-react^7.20.0]()
- [eslint-plugin-react-hooks^2.5.1]()
- [husky^4.2.5]()
- [lint-staged^10.2.7]()
- [prettier^2.0.5"]()

---

### Comandos utilizados

```shell
# eslint + prettier
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier husky lint-staged --dev

# cria um eslint config
npx eslint --init

# adiciona o react-icons
yarn add react-icons

# adiciona o react-router-dom
yarn add react-router-dom

# adiciona a integração com maps
yarn add leaflet react-leaflet

# adiciona o axios para chamadas a api
yarn add axios

# adiciona um modal
yarn add react-responsive-modal
```
