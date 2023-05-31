const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const handlebars = require('express-handlebars');
const fs = require('fs-extra');


// Configuração da porta do servidor
const port = process.env.PORT || 3000;

// Configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const templates = handlebars.compile('Hello {{name}}!');
// const context = { name: 'World' };
// const result = templates(context);
// console.log(result); // Output: "Hello World!"
// console.log("__dirname: ", __dirname+"/index.handlebars");

// Configuração do template engine
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/index.handlebars',
    // layoutsDir: __dirname + '/views/layouts',
    // partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// app.set('views', __dirname + '/views');
// app.set('view engine', 'handlebars');

// Configuração do nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

// Modelo de email
const source = fs.readFileSync(__dirname + '/index.handlebars', 'utf8');
const template = handlebars.compile(source);

app.get('/', (req, res) => {
    res.render('index', { name: 'World' });
});

// Rota para envio de email
app.post('/sendEmail', (req, res) => {
    const { email, name } = req.body;
    const mailOptions = {
        from: 'seuemail@gmail.com',
        to: email,
        subject: 'Assunto do Email',
        html: template({ name })
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar o email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Email enviado com sucesso');
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});