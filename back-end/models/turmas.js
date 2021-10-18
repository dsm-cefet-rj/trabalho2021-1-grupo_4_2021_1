const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const turmaSchema = new Schema({
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
    },
    alunos:{
        type: String,
    },
    dataInicio:{
        type: String,

    },
    dataFim:{
        type: String,
    }
})

turmaSchema.plugin(normalize);

var Turmas = mongoose.model('Turma', turmaSchema);


module.exports = Turmas;