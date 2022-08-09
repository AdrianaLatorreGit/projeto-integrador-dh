const { application } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { hash } = require("bcrypt");

const loginCadastroController = (req, res, next) => {
    res.render("loginCadastro", { title: "Login-Cadastro" });
};

//Cadastrar novo usuário
const cadastrarNovoUsuario = async (req, res) => {
    const image = req.file.filename;
    const { nome, email, senha } = req.body;

    // const teste = async function hashSenha() {

    //     const salt = bcrypt.genSaltSync(5);
    //     const hash = bcrypt.hashSync(senha, salt);
    //     return hash;
    // }

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
    const usuarioDataBase = await Usuario.findOne({
        attributes: ["email", "senha"],
        where: {
            email: req.body.email,
        },
    });

    if (!usuarioDataBase) {
        return res.status(400).json({
            erro: true,
            mensagem:
                "Erro: Usuário ou a senha incorreta! Nenhum usuário com este e-mail",
        });
    }

    const hashCompare = bcrypt
        .compare(
            req.body.senha
            //resultado da busca do banco (senha)
            // "$2a$10$RodNSzrxoxhdvrI4WABJ6.AEy1cqKn7IcXfBEVDdxrjXV9ERLocxK"
        )
        .then(function (result) {
            if (!hashCompare) {
                return res.status(400).json({
                    erro: true,
                    mensagem:
                        "Erro: Usuário ou a senha incorreta! Senha incorreta!",
                });
            }
        });

    // if (!(await bcrypt.compare(req.body.password, usuario.password))) {
    //     return res.status(400).json({
    //         erro: true,
    //         mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!",
    //     });
    // }

    /* var token = jwt.sign({ id: usuario.id }, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
        //expiresIn: 600 //10 min
        //expiresIn: 60 //1 min
        expiresIn: "7d", // 7 dia
    });*/

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
    });
};

// const direcionarUsuario = async (req, res) => {
//     return res.json({
//         erro: false,
//         mensagem: "deu certo",
//         id_usuario_logado: req.usuarioId,
//     });
// };

module.exports = {
    loginCadastroController,
    cadastrarNovoUsuario,
    loginUsuario,
    // direcionarUsuario,
};
