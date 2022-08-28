const express = require("express");
const router = express.Router();
const {
    loginCadastroController,
    cadastrarNovoUsuario,
    loginUsuario,
    // direcionarUsuario,
} = require("../controllers/loginCadastroController");
const upload = require("../middlewares/uploadsUsuarios");
const { eAdmin } = require("../middlewares/auth");
const headerController = require("../controllers/headerController");

/* GET login cadastro. */
router.get("/loginCadastro", loginCadastroController);

router.post("/loginCadastro", upload.single("image"), cadastrarNovoUsuario);

router.post("/login", loginUsuario);
router.get("/login", headerController);

module.exports = router;
