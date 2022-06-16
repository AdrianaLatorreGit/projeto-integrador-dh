const express = require("express");
const router = express.Router();
const carrinhoController = require("../controllers/carrinhoController");

/* GET carrinho. */
router.get("/carrinho", carrinhoController);

module.exports = router;
