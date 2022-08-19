// const painelAdminController = require("../../controllers/painelAdminController");

// const { deletarProdutos } = painelAdminController;

// =======efeito hamburguer=========
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") {
        event.preventDefault();
    }
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    // para acessibilidade
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", "true");
    // mudar acessibilidade de abrir menu para fechar menu
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Compra finalizada
function btnCompra() {
    document.getElementById("compraEfetivada").style.visibility = "visible";
}

//   Validar login
function validarLogin() {
    let email = document.getElementById("emailLogin");
    let senha = document.getElementById("senhaLogin");

    if (email.value == "admin@admin.com" && senha.value == 1234) {
        document.getElementById("login-cadastro").style.visibility = "hidden";
        document.getElementById("login-cadastro").style.position = "absolute";

        document.getElementById("iconLogin").style.visibility = "hidden";
        document.getElementById("iconLogin").style.position = "absolute";

        document.getElementById("admin").style.visibility = "visible";
        document.getElementById("admin").style.position = "static";


    } else if (email.value == "user@user.com" && senha.value == 1234) {
        document.getElementById("login-cadastro").style.visibility = "hidden";
        document.getElementById("login-cadastro").style.position = "absolute";

        document.getElementById("admin").style.visibility = "hidden";
        document.getElementById("admin").style.position = "absolute";

        document.getElementById("iconLogin").style.visibility = "visible";
        document.getElementById("iconLogin").style.position = "static";
    }
}

// prevent Default
// const formLogin = document.getElementById("formLogin");

// function preventDefault(event) {
//     event.preventDefault();
// }

// formLogin.addEventListener("submit", preventDefault);

//Deletar Produtos CRUD
// const deletando = document.getElementById("botaoDeletar").onclick;
// deletando.addEventListener("DELETE", deletarProdutos());
// console.log(deletarProdutos());

//local Storage

// function botaoLocal() {
//     const localStorage = (req, res, next) => {
//         let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//         favorites.push(produto);
//         localStorage.setItem("favorites", JSON.stringify(favorites));
//     };
//     const botao = document.getElementById("localstorage");
//     botao.addEventListener("submit", localStorage);
// }
