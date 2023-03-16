# API Escola de Magia e Feitiços
Projeto de uma "Escola de Magia" usado para estudar as funcionalidades do ORM Sequelize.

## Tecnologias
- **Express**: middleware para criacão de servidor web
- **Body-Parser**: modulo para converção do dados recebidos, para objetos JSON
- **Sequelize/Sequelize-CLI**: para manipulação dos dados
- **MYSQL**: banco de dados relacional para persistência dos dados
- *e muito mais...*

## Padrão de Projeto
- **MVC** como padrão adotado no projeto

## Requisitos
- MySQL Server
- Node.js

## Instalação
```
npm install
```

## Configurando o Bando de Dados
Para configurar o acesso ao banco de dados pelo Sequelize, altere o parâmentros contidos no arquivo `./api/config/config.json`, conforme o exemplo abaixo:
```
"development": {
    "username": "usuario123",
    "password": "senha123",
    "database": "escola_ingles",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
```

## Criando o Banco de Dados
```
npx sequelize-cli db:create
```

## Carregando as Migrações
```
npx sequelize-cli db:migrate
```

## Carregando os Seeds (_dados de exemplo_)
```
npx sequelize-cli db:seed:all
```

## Executando o Servidor
```
npm start
```

## Funcionalidades
[em breve]

## Documentação
[em breve]
