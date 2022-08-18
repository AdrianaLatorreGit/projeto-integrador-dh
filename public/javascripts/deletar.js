// const deletarProdutos = require('../../controllers/painelAdminController')

// const painelAdminController = require("../../controllers/painelAdminController");

// const { deletarProdutos } = painelAdminController;

// const Produto = require("../models/Produto");

// const deletarProdutos = async (req, res, nex) => {
//     const { id } = req.params;
//     try {
//         await Produto.destroy({ where: { id: Number(id) } });
//         return res.status(200).json({ mensage: `o id ${id} deletado` });
//     } catch (error) {
//         return res.status(500).json(error.message);
//     }
// };

async function deleteById(id) {
    fetch(`http://localhost:3000/renderizarProdutos/${id}`, {
        method: "delete",
    })
        .then((response) => console.log(response))
        .catch((e) => console.log(e));
}

module.exports = deleteById;

// module.exports = deletarProdutos;

{
    /* <input type="button" value="anonymous function" onclick="(function(){
console.log('ok');
console.log('ok2');
})()"> */
}
