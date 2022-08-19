const adminController = require("../../controllers/painelAdminController");

function deleteById(id) {
    fetch(`http://localhost:3000/renderizarProdutos/${id}`, {
        method: "delete",
    });
    document.location
        .reload(true)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));

    // return adminController.deletarProdutos(req, res);
}

module.exports = deleteById;

// module.exports = deletarProdutos;
