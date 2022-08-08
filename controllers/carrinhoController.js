const Produto = require("../models/Produto");
const carrinhoController = async (req, res, next) => {
    const id = parseInt(req.query.id);
    await Produto.findByPk(id).then((produto) => {
        if (produto)
            return res.render("carrinho", { title: "Carrinho", produto });
    });
};

// const localStorage = (req, res, next) => {
//     let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     favorites.push(produto);
//     res.JSON(localStorage.setItem("favorites", JSON.stringify(favorites)));
// };
// console.log(localStorage);

module.exports = carrinhoController;
