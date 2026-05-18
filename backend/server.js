const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/mensagem", (req, res) => {

  const mensagens = [
    "Você consegue aprender programação 😄",
    "Cada erro te deixa mais forte 🚀",
    "O importante é continuar praticando 💻",
    "Grandes desenvolvedores também começaram do zero ✨"
  ];

  const numeroAleatorio = Math.floor(Math.random() * mensagens.length);

  res.json({
    mensagem: mensagens[numeroAleatorio]
  });

});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});