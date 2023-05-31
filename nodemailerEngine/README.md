Para montar uma API completa com template engine e nodemailer, é necessário seguir alguns passos:

1. Definir as rotas da API: As rotas definem os endpoints da API, ou seja, as URLs que serão utilizadas para acessar os diferentes recursos da aplicação.

2. Configurar o servidor: É necessário configurar o servidor para que ele possa receber e processar as requisições HTTP da API. Isso inclui definir as portas de acesso, os middlewares e a configuração do template engine.

3. Criar os modelos de email: É preciso criar os modelos de email que serão utilizados pela API. Isso envolve a criação dos arquivos HTML e a definição dos placeholders que serão preenchidos dinamicamente pela aplicação.

4. Configurar o nodemailer: O nodemailer é uma biblioteca de Node.js que permite o envio de emails. É necessário configurar a biblioteca com as credenciais do serviço de email que será utilizado para enviar as mensagens.

5. Criar os controladores da API: Os controladores são responsáveis por definir a lógica de negócio da API. Eles recebem as requisições HTTP, processam os dados e enviam as respostas adequadas.

6. Integrar a template engine com o nodemailer: Para enviar os emails utilizando os modelos criados anteriormente, é necessário integrar a template engine com o nodemailer. Isso envolve a definição dos dados que serão passados para o modelo e a renderização do HTML.

Segue abaixo um exemplo básico de como poderia ser montada uma API completa com template engine e nodemailer:

```javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

// Configuração da porta do servidor
const port = process.env.PORT || 3000;

// Configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do template engine
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Configuração do nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

// Modelo de email
const source = fs.readFileSync(__dirname + '/views/email.handlebars', 'utf8');
const template = handlebars.compile(source);

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
```