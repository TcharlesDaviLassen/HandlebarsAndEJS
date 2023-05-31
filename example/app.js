const express = require('express');
const exphbs = require('express-handlebars');
// const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

const port = 3000;

// app.engine('handlebars', exphbs.engine({
//     defaultLayout: 'main.handlebars',
//     // handlebars: handlebars
// }));
// app.set('view engine', 'handlebars');

// Configuração do Handlebars
// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "home"}));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')


app.get('/', function (req, res) {

    let data = {
        title: 'Minha Página',
        message: 'Bem-vindo ao meu site!'
    }

    res.render(path.join(__dirname) + '/views/layouts/main.handlebars', { title: 'Minha Página', message: 'Bem-vindo ao meu site!' });
    console.log(path.join("=> ", __dirname) + '/views/layouts/main.handlebars');
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
});


