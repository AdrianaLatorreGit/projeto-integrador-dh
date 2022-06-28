const express = require("express");
const router = express.Router();
const detalheProdutoController = require("../controllers/detalheProdutoController");

/* GET detalheProdutos. */
router.get("/detalheProduto", detalheProdutoController);

module.exports = router;
