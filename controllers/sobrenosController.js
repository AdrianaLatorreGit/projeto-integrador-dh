const Usuario = require("../models/Usuario");

const sobrenosController = async (req, res, next) => {
    const usuarios = await Usuario.findAll();
    res.render("sobrenos", { title: "Sobre nós", usuarios });
};

module.exports = sobrenosController;
