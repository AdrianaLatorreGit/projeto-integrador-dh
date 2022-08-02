const Produto = require("../models/Produto");
const carrinhoController = async (req, res, next) => {
    const id = parseInt(req.query.id);
    await Produto.findByPk(id).then((produto) => {
        if (produto)
            return res.render("carrinho", { title: "Carrinho", produto });
    });
};

module.exports = carrinhoController;
