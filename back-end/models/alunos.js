const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const alunosSchema = new Schema({
    id: {
        type: String,
    },
    nome: {
        type: String,
        required: true,
    },
    turma: {
        type: String,
        required: true,
    },
    tipoconta: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

alunosSchema.plugin(normalize);

var Alunos = mongoose.model('Alunos', alunosSchema);


module.exports = Alunos;