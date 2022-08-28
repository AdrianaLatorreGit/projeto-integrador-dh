const Produto = require("../models/Produto");
const Usuario = require("../models/Usuario");

const detalheProdutoController = async (req, res, next) => {
    const id = parseInt(req.query.id);
    const usuarios = await Usuario.findAll();
    await Produto.findByPk(id).then((produto) => {
        if (produto)
            return res.render("detalheProduto", {
                title: "Detalhe",
                produto,
                usuarios,
            });
    });
};

module.exports = detalheProdutoController;
