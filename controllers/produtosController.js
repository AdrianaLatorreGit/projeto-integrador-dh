const Produto = require("../models/Produto");

const produtosController = async (req, res, next) => {
    const produtos = await Produto.findAll();
    res.render("produtos", {
        title: "Produtos",
        // produto: "renderizarProdutos",
        produtos,
    });
};

// listar os produtos
// const renderizarProdutos = async (req, res) => {
//     const produtos = await Produto.findAll();
//     return res.render("produtos", { produtos });

// };

module.exports = { produtosController };
