### Para usar uma template engine personalizada com nodemailer, primeiro é preciso definir a template engine que você deseja usar. Neste exemplo, vamos utilizar a EJS como template engine.

Instale o pacote `ejs` utilizando o gerenciador de pacotes npm:

`npm install ejs`
<br/>
Crie uma template utilizando a sintaxe da engine escolhida, no caso da EJS é necessário criar um arquivo 
`.ejs`. Por exemplo, suponha que você queira criar uma mensagem de boas-vindas, salve o arquivo como welcome.ejs com o seguinte conteúdo:

```html

<html>
   <body>
      <h1>Bem-vindo <%= name %>!</h1>
   </body>
</html>
```

No arquivo do seu código JavaScript que irá enviar o e-mail, utilize o seguinte código:

```javascript

const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

// Lê o conteúdo do arquivo EJS
const ejsTemplate = fs.readFileSync('./welcome.ejs', 'utf8');

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
```

Ao executar este código, a template engine EJS irá ler o arquivo welcome.ejs, compilar a template e renderizá-la com os dados fornecidos ({ name: 'Fulano' }), criando um arquivo HTML. Este arquivo será usado como conteúdo do e-mail enviado pelo nodemailer.