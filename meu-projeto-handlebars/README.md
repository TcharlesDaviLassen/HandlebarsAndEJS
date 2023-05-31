Para criar uma aplicação com o template engine express-handlebars, você precisa seguir os seguintes passos:

1. Criar um projeto Node.js e instalar as dependências do Express e do Handlebars:
```bash

mkdir meu-projeto-handlebars
cd meu-projeto-handlebars
npm init -y
npm install express express-handlebars
```

2. Crie um arquivo index.js para sua aplicação Express:
```javascript
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000!');
});
```

3. Crie um diretório chamado views e adicione um arquivo home.handlebars dentro dele:
```handlebars

<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página Handlebars</title>
  </head>
  <body>
    <h1>{{titulo}}</h1>
    <p>{{mensagem}}</p>
  </body>
</html>
```

Inicie a aplicação:

node index.js
Abra o navegador e acesse http://localhost:3000. Você deverá ver a página HTML com as informações do arquivo `home.handlebars`.
Observe que na etapa 2, estamos configurando o Handlebars como mecanismo de visualização (view engine) do Express. Na etapa 3, estamos criando o arquivo home.handlebars que será renderizado pelo Express. E na etapa 4, estamos iniciando a aplicação.

Você pode criar outras rotas e arquivos Handlebars para sua aplicação. Basta adicionar os arquivos Handlebars na pasta views e usar a função res.render() para renderizá-los nas rotas correspondentes.