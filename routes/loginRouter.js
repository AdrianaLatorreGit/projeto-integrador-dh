const express = require("express");
const router = express.Router();

const { loginUsuario } = require("../controllers/loginCadastroController");

const { eAdmin } = require("../middlewares/auth");
const headerController = require("../controllers/headerController");

/* GET login  */

router.post("/login", loginUsuario);
router.get("/login", headerController);

module.exports = router;
