const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const respostasSchema = new Schema({
    prova: {
        type: [],
        required: true,
    },
    pergunta: {
        type: [],
        required: true,
    },
    resposta: {
        type: [],
        required: true,
    }
})

respostasSchema.plugin(normalize);

var Respostas= mongoose.model('Respostas', respostasSchema);


module.exports = Respostas;