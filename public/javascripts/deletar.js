// const painelAdminController = require("../../controllers/painelAdminController");

// const { deletarProdutos } = painelAdminController;

// const Produto = require("../models/Produto");

// const deletarProdutos = async (req, res, nex) => {
//     const { id } = req.params;
//     try {
//         await Produto.destroy({ where: { id: Number(id) } });
//         return res.status(200).json({ mensage: `o id ${id} deletado` });
//     } catch (error) {
//         return res.status(500).json(error.message);
//     }
// };

fetch("../../controllers/painelAdminController").then(function () {
    const btnDeletar = document.getElementById("botaoDeletar");
    btnDeletar.addEventListener("click", deletarProdutos());
});

// module.exports = deletarProdutos;
