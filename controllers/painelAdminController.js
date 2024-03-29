const Produto = require("../models/Produto");
const Usuario = require("../models/Usuario");

const painelAdminController = async (req, res, next) => {
    const usuarios = await Usuario.findAll();
    res.render("painelAdmin", { title: "Painel Admin", usuarios });
};

//Cadastrar novo produto
const cadastrarNovoProduto = async (req, res) => {
    const image = req.file.filename;
    const { produto, preco, detalhes, descricao } = req.body;

    const produtos = {
        produto,
        preco,
        detalhes,
        descricao,
        image,
    };

    console.log(produtos);

    await Produto.create(produtos);

    return res.redirect("/painelAdmin");
};

// listar os produtos
const renderizarProdutos = async (req, res) => {
    const produtos = await Produto.findAll();
    return res.render("renderizarProdutos", { produtos });
};

const deletarProdutos = async (req, res, nex) => {
    const { id } = req.params;
    try {
        await Produto.destroy({ where: { id: Number(id) } });
        return res.status(200).json({ mensage: `o id ${id} deletado` });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    painelAdminController,
    cadastrarNovoProduto,
    renderizarProdutos,
    deletarProdutos,
};
