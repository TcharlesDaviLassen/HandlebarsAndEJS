### Para rodar uma template engine com nodemailer, é necessário configurar o nodemailer para usar um mecanismo de visualização de modelo (template engine). Existem vários mecanismos de visualização de modelo populares que podem ser usados com o nodemailer, como o EJS, o Handlebars e o Mustache.

Aqui está um exemplo de como configurar o nodemailer para usar o mecanismo de visualização de modelo Handlebars:

1. Instale o pacote handlebars usando o gerenciador de pacotes npm:

`npm install handlebars`
<br/>

2. Importe o pacote `handlebars` e configure o nodemailer para usar o mecanismo de visualização de modelo Handlebars. Para fazer isso, você precisa criar uma função que compila o modelo do Handlebars e retorna o HTML renderizado:
```js

const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");

// configure o transportador de email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "seu-email@gmail.com",
    pass: "sua-senha",
  },
});

// compile o modelo do Handlebars e retorne o HTML renderizado
const handlebarsRender = async (filePath, options) => {
  const source = fs.readFileSync(filePath, "utf-8");
  const template = handlebars.compile(source);
  const html = template(options);
  return html;
};

// configure o nodemailer para usar o mecanismo de visualização de modelo Handlebars
transporter.use(
  "compile",
  (mail, done) => {
    handlebarsRender(
      "caminho/para/o/modelo.handlebars",
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
```

Este exemplo configura o nodemailer para usar o mecanismo de visualização de modelo Handlebars usando a função `handlebarsRender() `que compila o modelo do Handlebars e retorna o HTML renderizado. O nodemailer é configurado para usar o mecanismo de visualização de modelo Handlebars usando o método `transporter.use()`. O email é enviado usando o método `transporter.sendMail()`.