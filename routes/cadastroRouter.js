const express = require("express");
const router = express.Router();
const cadastroController = require("../controllers/cadastroController");

/* GET carrinho. */
router.get("/cadastro", cadastroController);

module.exports = router;
