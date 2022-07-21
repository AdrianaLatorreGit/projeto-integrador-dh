const express = require("express");
const router = express.Router();
const {
    painelAdminController,
    cadastrarNovoProduto,
} = require("../controllers/painelAdminController");
const upload = require("../middlewares/uploadsProdutos");

/* GET Painel Admin */
router.get("/painelAdmin", painelAdminController);
router.post("/painelAdmin", upload.single("image"), cadastrarNovoProduto);

module.exports = router;
