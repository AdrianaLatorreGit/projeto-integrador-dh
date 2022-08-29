const { application } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { hash } = require("bcrypt");

const loginCadastroController = async (req, res, next) => {
    const usuarios = await Usuario.findAll();
    res.render("loginCadastro", { title: "Login-Cadastro", usuarios });
};

//Cadastrar novo usuário
const cadastrarNovoUsuario = async (req, res) => {
    const image = req.file.filename;
    const { nome, email, senha } = req.body;

    async function criarHash(senha) {
        const cost = 10;
        const salt = bcrypt.genSaltSync(cost);
        const cyphertext = bcrypt.hashSync(senha, salt);
        return cyphertext;
    }

    let hashResult = await criarHash(senha);

    const usuario = {
        nome,
        email,
        senha: hashResult,
        image,
    };
    await Usuario.create(usuario);

    return res.redirect("/");
};

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    const usuarioDataBase = await Usuario.findOne({
        attributes: ["email", "senha", "nome", "image"],
        where: {
            email,
        },
    });

    const { nome, image } = usuarioDataBase;
    const usuario = { nome, image };

    if (!usuarioDataBase) {
        return res.status(404).json({
            erro: true,
            mensagem: "Erro: E-mail incorreto",
        });
    }

    const match = await bcrypt.compare(senha, usuarioDataBase.senha);

    if (match) {
        const token = jwt.sign({ foo: "bar" }, "privateKey", {
            expiresIn: "1h",
        });

        return res.status(200).render("logado", { token, usuario });
    }

    // retornar uma tela de erro
    return res.status(400).json({ token: false, mesage: "Senha incorreta" });
};

module.exports = {
    loginCadastroController,
    cadastrarNovoUsuario,
    loginUsuario,
};
