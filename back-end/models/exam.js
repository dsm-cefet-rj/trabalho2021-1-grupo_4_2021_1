const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    questoes: {
        type: [],
        required: true
    },
    respostas: {
        type: []
    }
});

var Prova = mongoose.model('Prova', examSchema);

module.exports = Prova;
