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
