const Usuario = require("../models/Usuario");

const headerController = async (req, res, next) => {
    const usuarios = await Usuario.findAll();
    res.render("logado", {
        title: "Logado",
        usuarios,
    });
    
};

module.exports = headerController;
