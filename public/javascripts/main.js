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

function iconUser() {
    let token = localStorage.getItem("token");

    if (token) {
        document.getElementById("login-cadastro").style.visibility = "hidden";
        document.getElementById("login-cadastro").style.position = "absolute";

        document.getElementById("admin").style.visibility = "hidden";
        document.getElementById("admin").style.position = "absolute";

        document.getElementById("iconLogin").style.visibility = "visible";
        document.getElementById("iconLogin").style.position = "static";
    }
}

// function admin() {
//     let email = document.getElementById("adminLogin");
//     let senha = document.getElementById("senhaAdmin");
//     if (email.value == "admin@admin.com" && senha.value == 1234) {
//         document.getElementById("login-cadastro").style.visibility = "hidden";
//         document.getElementById("login-cadastro").style.position = "absolute";

//         document.getElementById("iconLogin").style.visibility = "hidden";
//         document.getElementById("iconLogin").style.position = "absolute";

//         document.getElementById("admin").style.visibility = "visible";
//         document.getElementById("admin").style.position = "static";
//     }
// }

function removeToken() {
    localStorage.removeItem("token");
}
