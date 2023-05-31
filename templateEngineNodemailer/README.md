Para personalizar o layout do HTML do email enviado pelo Nodemailer, você pode criar um arquivo HTML e usar um template engine, como o Handlebars ou o EJS, para substituir as variáveis do seu modelo pelo conteúdo dinâmico.

Por exemplo, suponha que você tenha um arquivo HTML chamado emailTemplate.html que contém o seguinte código:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>{{titulo}}</title>
</head>
<body>
    <h1>{{titulo}}</h1>
    <p>{{mensagem}}</p>
    <img src="{{imagem}}">
</body>
</html>
```
Você pode usar o Handlebars para substituir as variáveis `{{titulo}}`, `{{mensagem}}` e `{{imagem}}` pelo conteúdo dinâmico. Para isso, primeiro instale o Handlebars usando o gerenciador de pacotes npm:

`npm install handlebars`
<br/>
Em seguida, carregue o arquivo HTML e compile o modelo usando o Handlebars:

```javascript
const fs = require('fs');
const handlebars = require('handlebars');

// Carrega o arquivo HTML
const emailTemplate = fs.readFileSync('emailTemplate.html', 'utf8');

// Compila o modelo com o Handlebars
const compiledTemplate = handlebars.compile(emailTemplate);
```
Em seguida, você pode usar o modelo compilado para substituir as variáveis pelos valores dinâmicos e gerar o HTML final:

```javascript

const mensagem = 'Este é o conteúdo da mensagem.';
const imagem = 'http://example.com/imagem.png';

// Substitui as variáveis pelo conteúdo dinâmico
const html = compiledTemplate({
    titulo: 'Título do Email',
    mensagem: mensagem,
    imagem: imagem
});
Finalmente, você pode passar o HTML gerado para o Nodemailer para enviar o email:

javascript
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
```
Lembre-se de que você pode personalizar o modelo HTML conforme sua necessidade, adicionando ou removendo elementos HTML e ajustando o CSS para criar o design desejado.