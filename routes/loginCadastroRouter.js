const express = require("express");
const router = express.Router();
const loginCadastroController = require("../controllers/loginCadastroController");

/* GET planos. */
router.get("/loginCadastro", loginCadastroController);

module.exports = router;
