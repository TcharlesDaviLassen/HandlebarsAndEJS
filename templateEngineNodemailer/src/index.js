const nodemailer = require("nodemailer");
const fs = require('fs-extra');
const handlebars = require('handlebars');

// Carrega o arquivo HTML
const emailTemplate = fs.readFileSync('templateEngineNodemailer/src/emailTemplate.handlebars', 'utf8');

// Compila o modelo com o Handlebars
const compiledTemplate = handlebars.compile(emailTemplate);


const mensagem = 'Este é o conteúdo da mensagem.';
const imagem = 'http://example.com/imagem.png';

// Substitui as variáveis pelo conteúdo dinâmico
const html = compiledTemplate({
    titulo: 'Título do Email',
    mensagem: mensagem,
    imagem: imagem
});


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

let mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'emaildestinatario@dominio.com',
    subject: 'Assunto do e-mail',
    html: html
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});