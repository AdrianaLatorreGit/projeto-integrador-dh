const Produto = require("../models/Produto");

const produtosController = (req, res, next) => {
    res.render("produtos", { title: "Produtos" , produto: "renderizarProdutos"});
};

// listar os produtos
const renderizarProdutos = async (req, res) => {
    const produtos = await Produto.findAll();
    return res.render("produtos", { produtos });
};

module.exports = { produtosController, renderizarProdutos };
