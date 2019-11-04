# README

Dependências
API
Ruby
Ruby On Rails
Algum banco de dados (SQLite, PostgreSQL ou MySQL)
Cliente Web
Create React App: https://github.com/facebook/create-react-app
Bootstrap: https://react-bootstrap.github.io
FontAwesome: https://github.com/FortAwesome/react-fontawesome

Passo a Passo

## Criando a API com Ruby On Rails
Primeiramente nós vamos criar a API que irá permitir a criação, visualização, remoção e atualização das tarefas.

## Criando e preparando o Projeto
Vamos gerar o projeto, criar o controller e model tasks e refletir isto no banco de dados

1. Crie o projeto da nossa API:
rails new tasks --api

2. Entre no projeto criado:
cd tasks

3. Agora gere um scaffold Tasks (controller + model) para gerenciarmos nossas tarefas:
rails g scaffold tasks title:string done:boolean

4. Crie o banco de dados e rode as migrations:
rails db:create db:migrate


## Liberando a API (cors)
Vamos liberar a API para que ela possa ser acessa via chamadas javascript do Browser, ou seja, habilitar e configurar o CORS.

1. Coloque no Gemfile:
gem 'rack-cors'

2. Instale a gem rodando:
bundle install

3. Coloque em config/initializers/cors.rb:
```
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

## Incluindo dados Fake no banco de dados
Vamos incluir algumas tasks no banco de dados para consumir futuramente no cliente
1. Acrescente os seguintes códigos em db/seeds.rb:
```
Task.create(title: 'Ler os artigo do OneBitCode sobre React', done: false)
Task.create(title: 'Participar da Semana Super Full Stack (29/04 - 05/05)', done: false)
Task.create(title: 'Se inscrever na newsletter para receber vagas', done: false)
Task.create(title: 'Curtir a página do OneBitCode no Facebook', done: false)
Task.create(title: 'Se inscrever no canal do Youtube do OneBitCode', done: false)
Task.create(title: 'Finalizar esse Artigo para melhorar minhas habilidades', done: false)
Task.create(title: 'Estudar Ruby On Rails', done: true)
Task.create(title: 'Estudar React', done: true)
```
2. Insira os valores no banco de dados:
rails db:seed

## Criando o cliente React
Agora nós iremos criar o projeto react que vai consumir a API criado anteriormente permitindo que realizando o CRUD de tarefas de forma visual e intuitiva.

Criando e preparando o Projeto
1. Instale o create-react-app
sudo npm i -g create-react-app --allow-root

2. Gere o projeto:
create-react-app tasks_client

3. Entre na pasta do projeto:
cd tasks_spa

4. Suba o servidor para ver o projeto gerado:
npm start

5. Em localhost:3000 deve aparecer:

## Instalando o Bootstrap, Sass e Fontawesome
Para criar um APP responsivo e com uma aparência intuitiva vamos utilizar o bootstrap e o fontawesome e para facilitar a criação de arquivos de estilo vamos utilizar o sass.

1. Instale o bootstrap
npm install --save react-bootstrap

2. Inclua o css do Bootstrap adicionando o ao arquivo public/index.html
```
<!DOCTYPE html>
   <html lang="en">
     <head>
       ...
      <link
         rel="stylesheet"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
         crossorigin="anonymous"
       />
       ...
     </head>
     <body>
   	...
     </body>
   </html>
```
Obs: Inclua-o sem alterar o resto dos códigos representados pelos “….”

3. Instale o sass para facilitar a criação de arquivos de estilo no APP:
npm install node-sass --save

4. Para deixar o APP mais elegante instale os ícones do fontawesome:
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons --save

5. Importe o fontawesome incluindo no src/App.js os seguintes trechos:
```
   import { library } from '@fortawesome/fontawesome-svg-core'
   import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

   library.add(faCheckCircle, faTrashAlt)
   ....

   class App extends Component {
     render() {
       ...
      }
   }
```

Obs: Inclua os imports e o library.add ao arquivo sem alterar o resto dos códigos representados pelos “…”

Obs2: O arquivo App.js será a base do nosso projeto, ou seja, todos os outros components serão renderizados a partir dele.

Explicação do código: O primeiro importe seleciona a biblioteca que vamos usar, o segundo importa os icones faCheckCircle (usado pra dizer que a tarefa está pronta) e faTrashAlt (usando pra excluir a tarefa) e o terceiro adiciona os ícones selecionados a library para termos acesso a eles em todos os components.