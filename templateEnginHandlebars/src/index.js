const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const ejs = require('ejs');

// configure o transportador de email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "seu-email@gmail.com",
        pass: "sua-senha",
    },
});

// Compila a template engine
const compiled = ejs.compile(ejsTemplate);

// Renderiza a template com os dados
const html = compiled(
    {
        pageTitle: 'Template Engin Handlebars EJS',
        header: 'Template Engin',
        body: 'Template'

    }
);

// compile o modelo do Handlebars e retorne o HTML renderizado
const handlebarsRender = async (filePath, options) => {
    // const source = fs.readFileSync(filePath, "utf-8");
    // const template = handlebars.compile(source);
    // const html = template(options);
    return html;
};

// configure o nodemailer para usar o mecanismo de visualização de modelo Handlebars
transporter.use(
    "compile",
    (mail, done) => {
        handlebarsRender(
            "templateEnginHandlebars/src/index.ejs",
            mail.data,
        ).then((html) => {
            mail.html = html;
            done();
        }).catch((error) => {
            console.error(error);
            done(error);
        });
    }
);

// enviar o email
const mailOptions = {
    from: "seu-email@gmail.com",
    to: "destinatario@example.com",
    subject: "Assunto do email",
    data: {
        message: "Conteúdo do email",
    },
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Email enviado: " + info.response);
    }
});