const mongoose = require('mongoose');
const { route } = require('../exam');
const Schema = mongoose.Schema;

const respostasSchema = new Schema({
    prova: {
        type: int,
        required: true,
    },
    pergunta: {
        type: int,
        required: true,
    },
    resposta: {
        type: [],
        required: true,
    }
})

var Respostas = mongoose.model('Respostas', respostasSchema);

module.exports = Respostas;