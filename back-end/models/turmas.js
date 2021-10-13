const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const turmaSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    tipoconta: {
        type: String,
        required: true,
    },
    professor: {
        type: String,
        required: false,
    },
    alunos:{
        type: Array,
        required: false,
    },
    dataInicio:{
        type: String,
        required: false,
    },
    dataFim:{
        type: String,
        required: false,
    }
})

turmaSchema.plugin(normalize);

var Turmas = mongoose.model('Turma', turmaSchema);


module.exports = Turmas;