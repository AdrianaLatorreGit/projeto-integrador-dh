// Adicionar e remover header Navigation

function showNavOnScrool() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

// Ativa botão hamburguer on click (botão openMenu)
function openMenu() {
    document.body.classList.add("menu-expended");
}

// clicar no botão de fechar, dentro do expanded e sumir aquela navegação (botão closeMenu)
function closeMenu() {
    document.body.classList.remove("menu-expended");
}