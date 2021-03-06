const Usuario = require("../models/Usuario");

const loginCadastroController = (req, res, next) => {
    res.render("loginCadastro", { title: "Login-Cadastro" });
};

//Cadastrar novo usuário
const cadastrarNovoUsuario = async (req, res) => {
    const image = req.file.filename;
    const { nome, email, senha } = req.body;

    console.log(req.file.filename);
    const usuario = {
        nome,
        email,
        senha,
        image,
    };

    await Usuario.create(usuario);

    return res.redirect("/");
};

module.exports = { loginCadastroController, cadastrarNovoUsuario };
