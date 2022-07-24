const produtosController = (req, res, next) => {
    res.render("produtos", { title: "Produtos" });
};

module.exports = produtosController;
