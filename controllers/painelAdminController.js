const Produto = require("../models/Produto");

const painelAdminController = (req, res, next) => {
    res.render("painelAdmin", { title: "Painel Admin" });
};

//Cadastrar novo produto
const cadastrarNovoProduto = async (req, res) => {
    const image = req.file.filename;
    const { produto, preco, categoria, detalhes, descricao } = req.body;

    const produtos = {
        produto,
        preco,
        categoria,
        detalhes,
        descricao,
        image,
    };

    await Produto.create(produtos);

    return res.redirect("/");
};

module.exports = { painelAdminController, cadastrarNovoProduto };
