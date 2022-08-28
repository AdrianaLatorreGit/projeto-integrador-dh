const Produto = require("../models/Produto");
const Usuario = require("../models/Usuario");

const produtosController = async (req, res, next) => {
    const produtos = await Produto.findAll();
    const usuarios = await Usuario.findAll();
    res.render("produtos", {
        title: "Produtos",
        produtos,
        usuarios,
    });
};

module.exports = { produtosController };
