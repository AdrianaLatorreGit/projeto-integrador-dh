// importando Express
const express = require("express");
// Iniciando express
const app = express();
// indicando que express vai usar JSON
app.use(express.json());
// Definindo porta que a requisição vai ficar ouvindo
const port = 3000;

// acessar a rota http://localhost:3000 e resposta em json
app.get("/", (request, response) => {
    return response.json({ mensagem: "Olá turma" });
});

// ouvindo a porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 😆`);
});
