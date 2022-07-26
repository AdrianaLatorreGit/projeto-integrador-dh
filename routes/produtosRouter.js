const express = require("express");
const router = express.Router();

const { renderizarProdutos, painelAdminController } = require("../controllers/painelAdminController");
const { produtosController } = require("../controllers/produtosController");




/* GET planos. */
router.get("/produtos", produtosController);
router.get("/produtos", renderizarProdutos, painelAdminController);

module.exports = router;
