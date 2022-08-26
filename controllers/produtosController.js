const Produto = require("../models/Produto");

const produtosController = async (req, res, next) => {
    const produtos = await Produto.findAll();
    res.render("produtos", {
        title: "Produtos",
        produtos,
    });
};

module.exports = { produtosController };
