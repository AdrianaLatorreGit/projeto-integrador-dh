const Produto = require("../models/Produto");


const detalheProdutoController = async (req, res, next) => {
    const id = parseInt(req.query.id);
    await Produto.findByPk(id).then((produto) => {
        if (produto)
            return res.render("detalheProduto", { title: "Detalhe", produto });
    });
};

module.exports = detalheProdutoController;
