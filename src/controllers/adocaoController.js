const mongoose = require("mongoose");

const adocaoSchema = require("../models/AdocaoSchema");

const todosCachorros = async (req, res) => {
    try {
        const listarCachorros = await adocaoSchema.find()
        res.status(200).send(listarCachorros);

    } catch (error) {
        res.status(500).json({
            messagem: error.message
        })
    }
}

const adicionarCachorro = async (req, res) => {
    try {
        const db = new adocaoSchema({
            nome: req.body.nome,
            raca: req.body.raca,
            porte: req.body.porte,
            idade: req.body.idade,
            nomeResponsavel: req.body.nomeResponsavel,
            telefoneResponsavel: req.body.telefoneResponsavel,
            cidade: req.body.cidade,
        })

        const salvarCachorro = await db.save();

        res.status(201).json({
            db: salvarCachorro
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

const cachorroPorId = async (req, res) => {
    try {
        const cachorroEncontrado = await adocaoSchema.findById(req.params.id)
        console.log(cachorroEncontrado)

        if (cachorroEncontrado == null) {
            return res.status(404).send({
                messagem: "O ID informado não foi encontrado"
            })
        }
        res.status(200).json(cachorroEncontrado)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const deletarCachorro = async (req, res) => {
    try {
        const cachorroEncontrado = await adocaoSchema.findByIdAndDelete(req.params.id)
        console.log(cachorroEncontrado)

        if (cachorroEncontrado == null) {
            return res.status(404).send({
                messagem: "Nenhum cachorro encontrado para esse ID"
            })
        }

        res.status(200).json({
            mensagem: "Cachorro deletado com sucesso!", cachorroEncontrado
        })

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const atualizarResponsavel = async (req, res) => {
    try {
        const { nomeResponsavel, telefoneResponsavel } = req.body

        const responsavel = await adocaoSchema.findByIdAndUpdate(req.params.id, { nomeResponsavel, telefoneResponsavel })

        if (responsavel == null) {
            return res.status(404).send({
                mensagem: "Responsável não encontrado"
            })
        }

        res.status(200).json({ mensagem: "Responsável atualizado com sucesso", responsavel })

    } catch (error) {
        res.status(500).json({
            mensagem: error.mensage
        })
    }
}


module.exports = {
    todosCachorros,
    adicionarCachorro,
    cachorroPorId,
    deletarCachorro,
    atualizarResponsavel
}