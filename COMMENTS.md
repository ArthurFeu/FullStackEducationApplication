# Documentação do Projeto

## Decisão da Arquitetura Utilizada

O projeto segue uma arquitetura de aplicação web cliente-servidor. Ele é dividido em duas partes principais: o frontend e o backend.
Optei por este modelo de arquitetura (mais detalhada em ARCHITECTURE.md), pois foi como aprendi a desenvolver aplicações web na faculdade.
Se trata de uma estrutura que eu conheço e saberia replicar boas práticas. Aprendi esse estilo de desenvolvimento com dois projetos em que errei muito,
mas que nesse desafio técnico pude consertar e aplicar novos conhecimentos que obtive ao longo do tempo.

Além disso, apliquei algumas decisões estruturais com base no meu estágio de desenvolvimento na dti digital, como a organização dos testes unitários
e o uso separado de funções para cada tipo de "problema a ser resolvido" (services, componentes, routers, páginas e outros tipos sempre tratados individualmente por cenário ou entidade).

Projetos mencionados:

https://github.com/ArthurFeu/CalendarioComLembretes

https://github.com/ArthurFeu/ColetaDeSangue


## Lista de Bibliotecas de Terceiros Utilizadas

### Backend

| Biblioteca       | Descrição                                                                 |
|------------------|---------------------------------------------------------------------------|
| concurrently     | Executa múltiplos comandos simultaneamente                                |
| express          | Framework web para Node.js                                                |
| mysql2           | Cliente MySQL para Node.js                                                |
| supertest        | Biblioteca para testar aplicações HTTP                                    |
| cors             | Middleware para habilitar o CORS (Cross-Origin Resource Sharing)          |
| axios            | Cliente HTTP baseado em Promises                                          |

### Frontend

| Biblioteca                 | Descrição                                                                 |
|----------------------------|---------------------------------------------------------------------------|
| @mdi/font                  | Conjunto de ícones Material Design para web                               |
| axios                      | Cliente HTTP baseado em Promises                                          |
| vue                        | Framework JavaScript para construção de interfaces de usuário 			 |
| vue-toastification         | Biblioteca de notificação Toast para Vue.js                               |
| vuetify                    | Framework de componentes UI para Vue.js baseado em Material Design        |
| vite                       | Ferramenta de build rápida para web                                       |
| vue-router                 | Biblioteca de roteamento oficial para Vue.js                              |

### Gerais

| Biblioteca                   | Descrição                                                                 |
|------------------------------|---------------------------------------------------------------------------|
| @babel/core                  | Babel é um compilador JavaScript                                          |
| @babel/preset-env            | Preset Babel para transformar ES6+ para ES5                               |
| @vue/test-utils              | Utilitários para testar componentes Vue.js                                |
| babel-jest                   | Biblioteca para usar Babel com Jest                                       |
| jest                         | Framework de testes em JavaScript                                         |
| jest-environment-jsdom       | Ambiente JSDOM para Jest                                                  |
| jest-mock-axios              | Biblioteca para mock de Axios em testes Jest                              |
| eslint                       | Ferramenta de linting para JavaScript                                     |


## O que Você Melhoraria se Tivesse Mais Tempo

Com mais tempo eu iria mais à fundo na solução do projeto, implementando o restante do CRUD, um sistema de logins para usuários, máscaras no preenchimento de campos e a conteinerização do projeto para facilitar o uso por outros desenvolvedores. Também teria feito mais testes unitários, buscando por uma line-coverage ou branch-coverage de pelo menos 80%. Aplicaria também mutation e fuzzing testes, para garantir uma maior eficácia. Além disso, na criação do DB, optei por já criar cursos e escolas (escola de engenharia ou de sistemas, por exemplo) e implementar o backend para todo o sistema, mas não houve tempo suficiente para implementar a solução completa no frontend. 


Caso tenha interesse, acesse meu repositório com estudos e práticas específicas de testes:
https://github.com/ArthurFeu/Software-Testing---Practices

Alguns testes estão no repositório abaixo. Neste projeto estudei processamento de linguagem natural para efetuar word sense disambiguation.
https://github.com/ArthurFeu/Natural-Language-Processing-/tree/main/PA4%20-%20Machine%20Learning


## Quais Requisitos Obrigatórios que Não Foram Entregues

Não acredito que seja um requisito obrigatório, mas apenas uma contextualização do problema (visto que o desafio "consiste em criar uma aplicação para o cadastro de alunos conforme os critérios de aceitação"), porém eu gostaria de ter implementado o sistema de matrícula de alunos. 


