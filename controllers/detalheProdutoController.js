const Produto = require("../models/Produto");

const detalheProdutoController = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const produtos = await Produto.findOne({
        where: { id },
    }).then((produtos) => {
        if (produtos)
            return res.render("detalheProduto", { title: "Detalhe", produtos });
    });
};

module.exports = detalheProdutoController;
