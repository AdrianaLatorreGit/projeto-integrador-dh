const express = require("express");
const router = express.Router();
const {
    painelAdminController,
    cadastrarNovoProduto,
    renderizarProdutos,
    deletarProdutos,
} = require("../controllers/painelAdminController");
const upload = require("../middlewares/uploadsProdutos");

/* GET Painel Admin */
router.get("/painelAdmin", painelAdminController);
router.post("/painelAdmin", upload.single("image"), cadastrarNovoProduto);

router.get("/renderizarProdutos", renderizarProdutos);
router.delete("/renderizarProdutos/:id", deletarProdutos);

module.exports = router;
