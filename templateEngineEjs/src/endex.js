const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs-extra');

// Lê o conteúdo do arquivo EJS
const ejsTemplate = fs.readFileSync('templateEngineEjs/src/index.ejs', 'utf8');
console.log(ejsTemplate)

// Compila a template engine
const compiled = ejs.compile(ejsTemplate);

// Renderiza a template com os dados
const html = compiled({ name: 'Fulano' });

// Configura o transporte
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: 'user@example.com',
        pass: 'password'
    }
});

// Define as opções de envio
const mailOptions = {
    from: 'user@example.com',
    to: 'recipient@example.com',
    subject: 'Bem-vindo!',
    html: html
};

// Envia o e-mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});