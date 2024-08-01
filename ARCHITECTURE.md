# Documentação da Arquitetura de Solução

## Visão Geral

A arquitetura deste projeto é uma aplicação web full stack, composta por um frontend desenvolvido em Vue.js e Vuetify, e um backend construído com Express.js. O projeto utiliza uma arquitetura cliente-servidor, onde o frontend é responsável pela interface do usuário e o backend lida com a lógica de negócios e a comunicação com o banco de dados MySQL. A comunicação entre o frontend e o backend é realizada através de requisições HTTP, utilizando a biblioteca Axios para facilitar as chamadas de API. O projeto também faz uso de Jest para implementar testes unitários e garantir a qualidade do código.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Plataforma para executar JavaScript no servidor.
- **Express**: Framework para criação de APIs RESTful.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Jest**: Framework de testes para JavaScript.

### Frontend
- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.
- **Vuetify**: Biblioteca de componentes baseada em Material Design para Vue.js.
- **Axios**: Cliente HTTP para fazer requisições assíncronas.
- **Vite**: Ferramenta de build e desenvolvimento.
- **ESLint**: Ferramenta para análise estática de código e criar um padrão estético.

## Estrutura do Projeto

### Backend


	connections

		connectionTests -> executar .http para testes de queries no BD

		database 		-> client para gerar a pool de conexões e o server para gerenciar as rotas da API

		routes			-> rotas da API

### Frontend


	components 	-> componentes reutilizáveis 

	pages 		-> páginas individuais do sistema

	plugins 	-> Plugins vue + axios

	router		-> configuração das rotas

	service 	-> funções de serviço do sistema, incluindo validações e tratativas de erro

	styles		-> arquivos de estilo (inalterado)

### Testes

Aqui, foram replicados os caminhos originais das pastas do backend e do frontend com seus respectivos testes unitários no lugar dos arquivos originais.