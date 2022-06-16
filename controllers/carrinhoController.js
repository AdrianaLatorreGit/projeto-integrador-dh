const carrinhoController = (req, res, next) => {
    return res.render("carrinho", { title: "Carrinho" });
};

module.exports = carrinhoController;
