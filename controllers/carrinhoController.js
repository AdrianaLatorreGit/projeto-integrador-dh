const Produto = require("../models/Produto");
const Usuario = require("../models/Usuario");

const carrinhoController = async (req, res, next) => {
    const id = parseInt(req.query.id);
    const usuarios = await Usuario.findAll();
    await Produto.findByPk(id).then((produto) => {
        if (produto)
            return res.render("carrinho", {
                title: "Carrinho",
                produto,
                usuarios,
            });
    });
};

module.exports = carrinhoController;
