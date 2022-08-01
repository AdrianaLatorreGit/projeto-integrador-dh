const Produto = require("../models/Produto");

const carrinhoController = async (req, res, next) => {
    const produtos = await Produto.findAll();
    res.render("carrinho", { title: "Carrihno", produtos });
};

module.exports = carrinhoController;

// const carrinhoController = async (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const produtos = await Produto.findOne({
//         where: { id },
//     }).then((produtos) => {
//         res.render("carrinho", { title: "Carrihno", produtos });
//     });
// };
