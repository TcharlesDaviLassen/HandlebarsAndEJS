### Para utilizar EJS com Express e incluir trechos de código JavaScript no HTML, podemos usar a tag `<% %> `para inserir código JavaScript no HTML e a tag `<%= %>` para imprimir o resultado de uma expressão JavaScript no HTML.

Abaixo segue um exemplo de como configurar e utilizar EJS com Express, incluindo trechos de código JavaScript no HTML:

Instale as dependências necessárias:

`npm install express ejs`
<br/>

Crie um arquivo `server.js `e configure o Express para utilizar EJS como template engine:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

Crie um arquivo views/index.ejs com o seguinte conteúdo:
```html

<!DOCTYPE html>
<html>
<head>
  <title>EJS Example</title>
</head>
<body>
  <h1><%= message %></h1>
  <% for(let i = 0; i < 5; i++) { %>
    <p>Count: <%= i %></p>
  <% } %>
</body>
</html>
```

Inicie o servidor:

node server.js
Acesse o endereço http://localhost:3000 no navegador e verifique se o texto "Hello World" e a contagem de 0 a 4 são exibidos corretamente na página.
O código acima utiliza a tag <%= %> para imprimir o valor da variável message na página, e a tag <% %> para criar um loop que imprime a contagem de 0 a 4 na página. Note que o código JavaScript dentro da tag <% %> é executado no servidor antes do HTML ser enviado para o cliente.

#
#

Para fazer uma template engine completa com EJS (Embedded JavaScript), siga os seguintes passos:

1. Instale o pacote `ejs` utilizando o gerenciador de pacotes NPM:

`npm install ejs`
<br/>

2. Configure o módulo `ejs` como o mecanismo de visualização padrão do Express, utilizando o método `set()`:

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
```

3. Crie um arquivo `.ejs` na pasta `views` do seu projeto. Esse arquivo conterá o HTML da sua página, com as marcações do EJS para interpolação de variáveis e uso de estruturas de controle, por exemplo:
```html

<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
	<title><%= title %></title>
</head>
<body>
	<h1><%= message %></h1>
</body>
</html>
```

4. Crie uma rota no seu arquivo de rotas (routes/index.js, por exemplo) para renderizar a página utilizando o método render() do Express:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu Site', message: 'Bem-vindo ao meu site!' });
});

module.exports = router;
```

Execute o seu aplicativo Express:
node app.js
Agora, quando você acessar a rota definida no passo 4, o Express irá renderizar a página index.ejs utilizando os valores passados como segundo parâmetro para o método render().