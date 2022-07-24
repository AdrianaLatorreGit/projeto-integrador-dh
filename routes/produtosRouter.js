const express = require("express");
const router = express.Router();
const planosController = require("../controllers/produtosController");

/* GET planos. */
router.get("/produtos", planosController);

module.exports = router;
