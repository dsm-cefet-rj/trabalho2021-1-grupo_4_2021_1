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
    professor: {
        type: String,
        required: true,
    },
    alunos:{
        type: String,
        required: true,
    },
    dataInicio:{
        type: String,
        required: true,
    },
    dataFim:{
        type: String,
        required: true,
    }
})

turmaSchema.plugin(normalize);

var Turmas = mongoose.model('Turma', turmaSchema);


module.exports = Turmas;