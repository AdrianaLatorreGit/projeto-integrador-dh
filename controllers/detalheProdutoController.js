const detalheProdutoController = (req, res, next) => {
    res.render("detalheProduto", { title: "Detalhe" });
};

module.exports = detalheProdutoController;
