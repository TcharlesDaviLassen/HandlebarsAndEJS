const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set(__dirname, path.join(__dirname, '/views/index.handlebars'));
// console.log(path.join(__dirname, '/views/index.handlebars') )

app.engine('handlebars', exphbs.engine({ defaultLayout: 'index' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/layouts/index.handlebars'), { name: 'World' });
    console.log(path.join(__dirname, 'views/index.handlebars'))
});

app.listen(3000);