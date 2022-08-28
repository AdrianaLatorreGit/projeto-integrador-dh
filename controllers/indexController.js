const Usuario = require("../models/Usuario");

const indexController = async (req, res, next) => {
    const usuarios = await Usuario.findAll();
    res.render("index", {
        title: "Home",
        usuarios,
    });
};

module.exports = indexController;
