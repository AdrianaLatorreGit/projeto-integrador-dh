const adminController = require("../../controllers/painelAdminController");

function deleteById(req, res) {
    // fetch(`http://localhost:3000/renderizarProdutos/${req.params(id)}`, {
    //     method: "delete",
    // })
    //     .then((res) => console.log(res))
    //     .catch((e) => console.log(e));
    return adminController.deletarProdutos(req, res);
}

module.exports = deleteById;

// module.exports = deletarProdutos;
