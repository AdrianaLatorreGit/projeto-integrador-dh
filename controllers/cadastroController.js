const Usuario = require("../models/Usuario");
const cadastroController = (req, res, next) => {
    res.render("cadastro", { title: "Cdastro" });
};

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    const usuarioDataBase = await Usuario.findOne({
        attributes: ["email", "senha"],
        where: {
            email,
        },
    });

    if (!usuarioDataBase) {
        return res.status(404).json({
            erro: true,
            mensagem:
                "Erro: Usuário ou a senha incorreta! Nenhum usuário com este e-mail",
        });
    }

    const hashCompare = bcrypt
        .compare(
            req.body.senha
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

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
    });
};

(module.exports = cadastroController), loginUsuario;
