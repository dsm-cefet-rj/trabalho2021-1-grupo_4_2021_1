const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const professoresSchema = new Schema({
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

professoresSchema.plugin(normalize);

var Professores = mongoose.model('Professores', professoresSchema);


module.exports = Professores;