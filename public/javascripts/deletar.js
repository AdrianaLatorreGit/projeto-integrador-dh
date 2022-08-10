const painelAdminController = require("../../controllers/painelAdminController");

const { deletarProdutos } = painelAdminController;

const btnDeletar = document.getElementById("botaoDeletar");
btnDeletar.addEventListener("click", deletarProdutos());
