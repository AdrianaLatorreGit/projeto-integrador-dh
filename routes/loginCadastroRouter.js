const express = require("express");
const router = express.Router();
const {
    loginCadastroController,
    form,
} = require("../controllers/loginCadastroController");
const upload = require("../middlewares/uploads");

/* GET planos. */
router.get("/loginCadastro", loginCadastroController, form);
router.post("/loginCadastro", upload.single("image"));

module.exports = router;
