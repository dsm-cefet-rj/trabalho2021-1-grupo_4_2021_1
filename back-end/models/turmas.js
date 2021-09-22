const mongoose = require('mongoose');
const { route } = require('../exam');
const Schema = mongoose.Schema;


const turmaSchema = new Schema({
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

module.exports = turmaSchema;