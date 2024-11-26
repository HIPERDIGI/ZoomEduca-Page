const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configure o transportador do nodemailer com Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hiperdigi@gmail.com', // Seu e-mail
    pass: 'halv wpqs mgpl epxj', // Sua chave de aplicativo
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, institution, workWith, role, institutionSize, institutionType, message } = req.body;

  const mailOptions = {
    from: 'hiperdigi@gmail.com',
    to: 'contato@hiperdigi.com.br', // Destinatário
    subject: 'Novo contato do formulário do site Zoom Educa',
    text: `
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      Instituição: ${institution}
      Trabalho com: ${workWith}
      Cargo: ${role}
      Tamanho da Instituição: ${institutionSize}
      Tipo de Instituição: ${institutionType}
      Mensagem: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erro ao enviar e-mail.');
    }
    res.status(200).send('E-mail enviado com sucesso!');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});