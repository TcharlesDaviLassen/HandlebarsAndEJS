const express = require('express');
const exphbs = require('express-handlebars');
// const { engine } = require('express-handlebars');
// const handlebars = require('handlebars');
// const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

const port = 3000;

// Configuração do Handlebars
// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "home"}));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'index' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const data = {
        name: 'John Doe',
        age: 30,
        hobbies: ['reading', 'writing', 'playing video games'],
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345'
        }
    };

    res.render(path.join(__dirname)+'/views/layouts/index.handlebars', { data });
    console.log("=>", path.join(__dirname)+'/views')
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
});
