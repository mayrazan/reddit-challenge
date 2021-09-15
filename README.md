# Desafio Frontend

O desafio consiste em ler dados da api do Reddit, do subreddit [reactjs](https://www.reddit.com/r/reactjs/) e criar uma aplicação React contendo as informações que podem ser vistas no [Figma](https://www.figma.com/file/PPvIPPITdlgZo9CeGDVezk/DesafioWinnin?node-id=0%3A1) com três botões para navegar entre hot, new e rising.

## Demo

https://reddit-challenge.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/mayrazan/reddit-challenge.git
```

Go to the project directory

```bash
  cd reddit-challenge
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## Tests

To run tests use the commands bellow

```bash
  yarn test to @testing-library/react tests
  yarn test:integration to cypress tests
```

## Tech Stack

- React
- Styled Components
- Prop-Types
- Material UI
- Cypress
- Lottie

## Application Features

- [x] Testes unitários;
- [x] Testes e2e;
- [x] Documentação;
- [x] Projeto rodando na Vercel;
- [x] Dark Mode;
- [x] Tratamento para rotas não existentes;
- [x] Páginas responsivas;
- [x] Uso de Context API para compartilhar o tema entre páginas e componentes.
- [x] Tratamento de erros para bad requests da api;
- [x] Busca por posts;
- [x] Login com google e autenticação de rotas.
