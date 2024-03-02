# Desafio Frontend

## Descrição

O desafio consiste em criar uma página que simula o pedido de um delivery de comida e suas opções de customização.

## Tecnologias

- [Vue.js](https://vuejs.org/) foi recomendado por ser usado no projeto da vaga em questão
- [TailwindCSS](https://tailwindcss.com/) foi utilizado devido a sua facilidade de customização e configuração, além de ser uma tecnologia que possuo experiência
- [Vite](https://vitejs.dev/) é usado por ser uma ferramenta de build mais rápida e de fácil configuração
- [TypeScript](https://www.typescriptlang.org/) para melhoria de qualidade no código e melhor DX (Developer Experience).
- [eslint](https://eslint.org/) e [prettier](https://prettier.io/) para padronização de código

## Instalação

### Requisitos

- [Node.js 20](https://nodejs.org/en/)
- [docker](https://www.docker.com/) (recomendado)

### Rodar usando docker

Para instalar as dependências do projeto, execute o comando abaixo:

```bash
npm install
```

Buildar a imagem do docker:

```bash
docker build -t <nome da imagem> .
```

Rodar a imagem do docker com um volume para o código:

```bash
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <nome da imagem>
```

### Rodar diretamente usando a máquina local

Para instalar as dependências do projeto, execute o comando abaixo:

```bash
npm install
```

Rodar o projeto:

```bash
npm start
```

## Pontos de melhoria

Foquei em entregar o projeto no tempo estipulado e com design fiel e responsivo, por isso, algumas coisas ficaram de fora. Abaixo, listo as melhorias que poderiam ser feitas por ordem de prioridade:

- Melhor tratamento de dados globais (pinia?) e preenchimento do form(Botão ticket)
- Adicionar testes unitarios com vitest e/ou vue testing library
- Melhor componentização dos icones de SVG, permitindo a customização de cores
- Adicionar CI/CD e deploy
- Melhor divisão de componentes, seguindo mais fielmente o atomic design
