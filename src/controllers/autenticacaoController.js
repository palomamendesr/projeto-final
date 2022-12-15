const UsuarioSchema = require("../models/UsuarioSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {
        UsuarioSchema.findOne({
            email: req.body.email
        }, (error, usuario) => {
            console.log(`O usuário é ${usuario}`)
            if (!usuario) {
                return res.status(404).send({
                    mensagem: "Usuário não encontrado",
                    email: `Email informado: ${req.body.email}`
                });
            }
            const senhaValida = bcrypt.compareSync(req.body.senha, usuario.senha)

            if (!senhaValida) {
                return res.status(401).send({
                    mensagem: "Senha inválida!",
                    statusCode: 401
                });
            }

            const token = jwt.sign({ nome: usuario.nome}, SECRET);
            console.log(`Seu token: ${token}`)

            res.status(200).send({
                mensagem: "Logada!", token
            });
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    login
}