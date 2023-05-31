Para criar uma aplicação Node.js com o EJS como mecanismo de template, siga os seguintes passos:

1. Crie um diretório para o projeto e acesse-o:
```bash
mkdir projeto-ejs
cd projeto-ejs
```

2. Inicialize um novo projeto Node.js:
```csharp
npm init -y
```
3. Instale as dependências necessárias:

`npm install express ejs`
<br/>

4. Crie um arquivo index.js e configure o Express para usar o EJS como mecanismo de template:
```javascript

const express = require('express');
const app = express();
const path = require('path');

// Configura o Express para usar o EJS como mecanismo de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define uma rota para renderizar um template com variáveis
app.get('/', (req, res) => {
  const nome = 'Fulano';
  const idade = 30;
  res.render('index', { nome, idade });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
```
5. Crie um diretório views na raiz do projeto e crie um arquivo index.ejs dentro dele:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo EJS</title>
</head>
<body>
  <h1>Olá, <%= nome %>!</h1>
  <p>Você tem <%= idade %> anos.</p>
</body>
</html>
```
Inicie o servidor:
node index.js
Acesse o endereço http://localhost:3000 no navegador e você verá a página HTML sendo renderizada com as variáveis definidas no arquivo index.js.
Este é um exemplo básico de como utilizar o EJS como mecanismo de template em uma aplicação Node.js. A partir daqui, você pode aprimorar a aplicação e utilizar mais recursos do EJS, como layouts e partials, para criar templates mais complexos e reutilizáveis.