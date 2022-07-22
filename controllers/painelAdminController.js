const Produto = require("../models/Produto");

const painelAdminController = (req, res, next) => {
    res.render("painelAdmin", { title: "Painel Admin" });
};

//Cadastrar novo produto
const cadastrarNovoProduto = async (req, res) => {
    const image = req.filename;
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

    return res.redirect("/painelAdmin");
};

// listar os produtos



const renderizarProdutos = async (req, res) => {
    const produtos = await Produto.findAll();
    return res.render("produtos", { produtos });
  };

// function renderizarProdutos() {
//     const tabela = document.getElementById("tabela");

//     tabela.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="produtos">
//         <span>${produtos.produto}</span>
//         <span>${produtos.preco}</span>
//         </div>
//         `
//     );
// }

// function pegueOsDados() {
//     const buttonCadastro = document.getElementById("buttonCadastro");

//     const nomeDoProduto = document.getElementById("nomeDoProduto").value;
//     const precoDoProduto = Number(
//         document.getElementById("precoDoProduto").value
//     );

//     const produto = {
//         nomeDoProduto,
//         precoDoProduto,
//     };

//     buttonCadastro.addEventListener("click", pegueOsDados);
// }

module.exports = {
    painelAdminController,
    cadastrarNovoProduto,
    renderizarProdutos,
};
