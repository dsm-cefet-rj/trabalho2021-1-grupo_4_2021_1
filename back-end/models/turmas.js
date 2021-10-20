const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const turmaSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: false,
    },
    turma: {
        type: String,
        required: false,
    },
    tipoconta: {
        type: String,
        required: false,
    },
    professor: {
        type: String,
    },
    dataInicio:{
        type: Date,
    },
    dataFim:{
        type: Date,
    }
})

turmaSchema.plugin(normalize);

var Turmas = mongoose.model('Turma', turmaSchema);


module.exports = Turmas;