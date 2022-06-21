const sobrenosController = (req, res, next) => {
    res.render("sobrenos", { title: "Sobre nós" });
}

module.exports = sobrenosController