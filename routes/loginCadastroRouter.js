const express = require("express");
const router = express.Router();
const {
    loginCadastroController,
    cadastrarNovoUsuario,
} = require("../controllers/loginCadastroController");
const upload = require("../middlewares/uploads");

/* GET planos. */
router.get("/loginCadastro", loginCadastroController);
router.post("/loginCadastro", upload.single("image"), cadastrarNovoUsuario);

module.exports = router;
