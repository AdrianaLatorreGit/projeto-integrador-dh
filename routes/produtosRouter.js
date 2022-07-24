const express = require("express");
const router = express.Router();
const {
    renderizarProdutos,
    produtosController,
} = require("../controllers/produtosController");

/* GET planos. */
router.get("/produtos", produtosController);
router.get("/produtos", renderizarProdutos);

module.exports = router;
