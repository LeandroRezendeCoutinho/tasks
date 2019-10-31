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
Default
Rails.application.config.middleware.insert_before 0, Rack::Cors do
     allow do
       origins '*'

       resource '*',
         headers: :any,
         methods: [:get, :post, :put, :patch, :delete, :options, :head]
     end
   end


## Incluindo dados Fake no banco de dados
Vamos incluir algumas tasks no banco de dados para consumir futuramente no cliente
1. Acrescente os seguintes códigos em db/seeds.rb:

Task.create(title: 'Ler os artigo do OneBitCode sobre React', done: false)
Task.create(title: 'Participar da Semana Super Full Stack (29/04 - 05/05)', done: false)
Task.create(title: 'Se inscrever na newsletter para receber vagas', done: false)
Task.create(title: 'Curtir a página do OneBitCode no Facebook', done: false)
Task.create(title: 'Se inscrever no canal do Youtube do OneBitCode', done: false)
Task.create(title: 'Finalizar esse Artigo para melhorar minhas habilidades', done: false)
Task.create(title: 'Estudar Ruby On Rails', done: true)
Task.create(title: 'Estudar React', done: true)

2. Insira os valores no banco de dados:
rails db:seed