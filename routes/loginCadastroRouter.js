const express = require("express");
const router = express.Router();
const {
    loginCadastroController,
    cadastrarNovoUsuario,
} = require("../controllers/loginCadastroController");
const upload = require("../middlewares/uploadsUsuarios");
const { eAdmin } = require("../middlewares/auth");

/* GET login cadastro. */
router.get("/loginCadastro", loginCadastroController);

router.post("/loginCadastro", upload.single("image"), cadastrarNovoUsuario);


module.exports = router;
