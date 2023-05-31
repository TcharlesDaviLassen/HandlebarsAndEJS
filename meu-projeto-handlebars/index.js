const express = require('express');
const exphbs = require('express-handlebars');
// const handlebars = require('express-handlebars');
const path = require('path');


const app = express();

// app.engine(
//     "handlebars",
//     engine({
//         defaultLayout: "main",
//     })
// );

app.engine(
    ".hbs",
    exphbs.engine(
        { extname: '.hbs' }
    )
);
app.set('view engine', '.hbs')
app.set('.hbs', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
    res.render(path.join(__dirname, '/views','home'));
});

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000!');
});
