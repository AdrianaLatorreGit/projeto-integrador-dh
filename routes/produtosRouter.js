const express = require("express");
const router = express.Router();

const {
    produtosController,
    renderizarProdutos,
} = require("../controllers/produtosController");

/* GET planos. */
router.get("/produtos", produtosController);

// router.get("/produtos", renderizarProdutos);

console.log("produtosRouter");

module.exports = router;
