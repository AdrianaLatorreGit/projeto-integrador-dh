const Produto = require("../models/Produto");

const detalheProdutoController = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const produtos = await Produto.findAll();
    res.render("detalheProduto", {
        title: "Detalhe Produtos",
        // produto: "renderizarProdutos",
        produtos,
    });
};

module.exports = detalheProdutoController;

// const detalheProdutoController = async (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const produtos = await Produto.findOne({
//         where: { id },
//     }).then((produtos) => {
//         if (produtos)
//             return res.render("detalheProduto", { title: "Detalhe", produtos });
//     });
// };
