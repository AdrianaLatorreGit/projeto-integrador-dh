const Produto = require("../models/Produto");
const cadastroController = (req, res, next) => {
    res.render("cadastro", { title: "Cdastro" });
};

async function comparePassword(senha, hashSenha) {
    return await bcrypt.compare(senha, hashSenha);
}

module.exports = cadastroController;
