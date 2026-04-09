# Catálogo de Jogos - CRUD Completo

Sistema desenvolvido para a disciplina de experiência criativa, com o objetivo de gerenciar um catálogo de jogos, permitindo cadastrar, visualizar, editar e excluir registros (CRUD).

## Tecnologias Utilizadas
* **Front-end:** React, Axios, React Router Dom.
* **Back-end:** Node.js, Express, Multer (upload de imagens), Cors.
* **Banco de Dados:** MySQL.

## Como Rodar o Projeto

### 1. Banco de Dados
* Importe o arquivo `banco-de-dados.sql` no seu MySQL (Workbench ou PHPMyAdmin).
* O script criará a tabela `jogos` e inserirá alguns dados iniciais.

### 2. Back-end
1.  Abra a pasta `Server` no terminal.
2.  Execute `npm install` para instalar as dependências.
3.  Execute `npm start` ou `node index.js` para iniciar o servidor na porta **8800**.

### 3. Front-end
1.  Abra a pasta `Client` (ou o nome da sua pasta react) no terminal.
2.  Execute `npm install`.
3.  Execute `npm run dev` para iniciar o projeto via Vite.

## Estrutura do Arquivo Enviado
* `/Client`: Código fonte do Front-end.
* `/Server`: Código fonte do Back-end.
* `banco-de-dados.sql`: Script de criação da tabela e dados.
* `video-explicativo.mp4`: Demonstração das funcionalidades e explicação do código.
