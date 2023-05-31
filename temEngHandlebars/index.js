
const express = require('express');
const exphbs = require('express-handlebars');
// const { engine } = require('express-handlebars');
// const handlebars = require('handlebars');
// const handlebars = require('express-handlebars');
// const fs = require('fs-extra');
const path = require('path');

const app = express();

const port = 3000;

// Configuração do Handlebars como mecanismo de visualização
app.engine('handlebars', exphbs.engine({ defaultLayout: 'index.handlebars' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')

// Rota que renderiza o template 'home' do Handlebars
app.get('/', async (req, res) => {
    const data = { titulo: 'Página Inicial', mess: 'Bem-vindo ao meu site!' };

    res.render(path.join(__dirname) + '/views/layouts/index.handlebars', { titulo: 'Página Inicial', mess: 'Bem-vindo ao meu site!' });
    console.log("=>", path.join(__dirname) + '/views')
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
});
