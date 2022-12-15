const usuarioSchema = require("../models/UsuarioSchema");
const bcrypt = require("bcrypt");
const UsuarioSchema = require("../models/UsuarioSchema");

const todosUsuarios = async (req, res) => {
    usuarioSchema.find(function (error, usuarios) {
        if (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }

        res.status(200).send(usuarios)
    })
}

const criarUsuario = async (req, res) => {
    const hashedSenha = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = hashedSenha

    const emailExiste = await UsuarioSchema.exists({ email: req.body.email })

    if (emailExiste) {
        return res.status(409).send({
            mensagem: "O email informado já é cadastrado."
        })
    }

    try {
        const novoUsuario = new UsuarioSchema(req.body)

        const salvarUsuario = await novoUsuario.save()

        res.status(201).send({
            mensagem: "Usuário cadastrado com sucesso!", salvarUsuario
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensagem: error.mensagem
        })
    }
}

module.exports = {
    todosUsuarios,
    criarUsuario
}