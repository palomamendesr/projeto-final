const mongoose = require("mongoose");

const AdocaoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    porte: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: false
    },
    nomeResponsavel: {
        type: String,
        required: true
    },
    telefoneResponsavel: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("cachorros", AdocaoSchema);