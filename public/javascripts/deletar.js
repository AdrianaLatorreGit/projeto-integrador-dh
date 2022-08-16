const deletarProdutos = require('../../controllers/painelAdminController')


const btnDeletar = document.getElementById('botaoDeletar')
btnDeletar.addEventListener('click', deletarProdutos())

