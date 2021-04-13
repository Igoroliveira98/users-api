![Apresentação do jogo](https://github.com/Igoroliveira98/Igoroliveira98/blob/master/backgrounds/Captura%20de%20tela%20de%202021-04-12%2022-05-20.png)

# Users API 

Projeto desenvolvido para por em prática conhecimentos aprendidos com relação a Backend e banco de dados.
 
**Download do Projeto:** 
```
https://github.com/Igoroliveira98/users-api.git
```


## 🧔🏻👩🏾 Resumo: 

Essa é uma API construída para a criação, registro, atualização e remoção de usuários do banco de dados. Utilizando conceitos de hash e variaveis de ambiente. 

## 🖥 Linguagem, pacotes e ferramentas utilizadas:

- JavaScript
- PostgreSQL
- Docker
- NodeJS
- ExpressJS
- KnexJS
- Dotenv
- BcryptJS


## 📋 Especificações:

**Backend**

- Arquivo de configuração do Knex
- Pasta controller contendo os controllers do usuário. 
- Pasta database contentdo as credenciais do banco de dados, as migrations e seeders.
- Um arquivo de rotas para acesso ao banco de dados
- Um arquivo server com as configurações do express e cors.


## ⚙️Configurações do projeto:

É necessário criar na pasta raiz um arquivo .env para passar as credenciais de acesso ao Banco de Dados com seguites informações:

```
DB_HOST= caso esteja usando docker, passar o host para acesso ao container
DB_NAME= nome dado ao baco de dados. Ex: admin
DB_USER= nome de usuário para acessar o banco de dados
DB_PASS= senha de acesso ao banco de dados
```

Obs: caso desejar utilizar outro banco de dados, alterar no Knexfile o "client" para o DB desejado.
