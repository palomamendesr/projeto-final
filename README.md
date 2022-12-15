# Projeto-Final {Reprograma} #

# Sobre o projeto 
  É uma API para um blog, no qual as pessoas podem cadastrar as informações de um pet(inicialmente apenas cachorros) para que outras possam adotá-lo. Quem deseja cadastrar um cachorro para adoção precisa realizar um login, e quem deseja adotar pode apenas entrar na página inicial do site e contatar o responsável pelo pet.

## Estrutura do projeto
         📁 projeto-final
           |
           |   📁 src
           |    |- 📁 controllers
           |    |    |- 📄 adocaoController.js
           |    |    |- 📄 autenticacaoController.js
           |    |    |- 📄 usuarioController.js
           |    |- 📁 database
           |    |    |- 📄 moogoseConnect.js
           |    |- 📁 middlewares
           |    |    |- 📄 auth.js
           |    |- 📁 models
           |    |    |- 📄 AdocaoSchema.js
           |    |    |- 📄 UsuarioSchema.js
           |    |- 📁 routes
           |    |    |- 📄 adocaoRoutes.js
           |    |- 📄 app.js
           |
           |- 📄 .env
           |- 📄 .gitignore
           |- 📄 package-lock.json
           |- 📄 package.json
           |- 📄 server.js
           |- 📄 vercel.json

## Endpoints
Rota Inicial
-	/adocao

Metodo | Rotas | Recurso | Autenticação
------------ | -------- | ------------- | --------------
 GET  | '/usuarios' | Retorna todos os usuários cadastrados. | Sim
 POST| '/novo' | Cria um novo usuário. | Não
 POST| 'login' | Realiza o login do usuário | Não
 GET | '/' | Retorna todos os pets cadastrados | Não
 POST | '/criar' | Cria uma novo cachorro | Sim
 PATCH | '/{id}' | Atualiza os dados do responsável(telefone e nome) | Sim
 GET | '/{id}' | Retorna os dados de um cachorro pelo seu id | Não
 DELETE | '/{id}' | Deleta um cachorro. | Sim
 
 ## Autenticação
 -	Para as rotas que são necessárias autenticação é utilizado o Bearer Token gerado no momento em que o usuário loga com email e senha.
 ```
 {
	"mensagem": "Logada!",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiUGFsb21hIE1lbmRlcyIsImlhdCI6MTY3MTEyNTM1OX0.zwMpxomoJxP34p59xyPwa14wBfMH8MQmC3S5FmS3JqI"
}
 ```
 
 ## O que cada rota retorna no servidor
 
- /adocao/usuarios

![todosusuarios](https://user-images.githubusercontent.com/32886209/207928822-3d59f06f-2fb9-420a-bfa4-5897ef21d9ac.png)

- /adocao/novo

![criandousuario](https://user-images.githubusercontent.com/32886209/207928869-c4c1778a-5e74-4e47-bf83-76943c6223e4.png)

- /adocao/login

![login](https://user-images.githubusercontent.com/32886209/207929025-9a7c8125-ecfe-4b49-9d50-282dde90a658.png)

- /adocao/

 ![todosdogs](https://user-images.githubusercontent.com/32886209/207927552-a24abc2b-31c7-4b7c-a1b6-a7c41effa785.png)
 
- /adocao/criar

![criardog](https://user-images.githubusercontent.com/32886209/207929235-d9366afb-c58d-4855-b16b-27bf8213c915.png)

- /adocao/{id}

![resp](https://user-images.githubusercontent.com/32886209/207930256-1ac8bcc9-27bb-4b83-bdc5-ab16306e3650.png)
 
- /adocao/{id}

![dogporid](https://user-images.githubusercontent.com/32886209/207930193-70c893d6-632a-47c1-8282-11d7f7212c51.png)
 
- /adocao/{id}

![deletedog](https://user-images.githubusercontent.com/32886209/207930088-dfd71564-316d-451a-bc5d-3ba0aec35cd2.png)

## Atributos Models

- Adoção 

Atributo | Tipo | Obrigatório |													
------------ | -------- | ------------- |								
 ID  | Default | Default																
 nome| String | Sim																			
 raca| String | Sim																		
 porte | String | Sim
 idade | String | Não
 nomeResposavel | String | Sim
 telefoneResponsavel | String | Sim
 cidade | String | Sim
 
 - Login

Atributo | Tipo | Obrigatório |													
------------ | -------- | ------- |								
 ID  | Default | Default															
 nome| String | Sim																			
 email| String | Sim
 senha| String | Sim


## Tecnologias utilizadas
- JavaScript
- MongoDB
- Insominia/Postman
- NodeJS
## Implantação em produção
- BackEnd: Vercel
- Banco de dados: MongoAtlas

## Como executar o projeto

```bash
# Clonar repositório
git clone https://github.com/palomamendesr/projeto-final

# Instale as dependências
npm install

# Inicialize a aplicação
npm start

# Teste as rotas
Insominia ou Postman
```


# Autora

## Paloma Mendes

