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

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
    });
};

// async function comparePassword(senha, hashSenha) {
//     return await bcrypt.compare(senha, hashSenha);
// }

(module.exports = cadastroController), loginUsuario;
