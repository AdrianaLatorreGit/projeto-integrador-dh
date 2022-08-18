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

/* GET login cadastro. */
router.get("/loginCadastro", loginCadastroController);

router.post("/loginCadastro", upload.single("image"), cadastrarNovoUsuario);

router.get("/loginCadastro", loginUsuario);
// router.get("/", eAdmin, direcionarUsuario);

module.exports = router;
