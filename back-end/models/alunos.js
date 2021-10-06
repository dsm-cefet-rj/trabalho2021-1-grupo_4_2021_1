const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
var validator = require('validator');

const alunosSchema = new Schema({
    id: {
        type: String,
    },
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true,
    },
    turma: {
        type: String,
        required: true,
        trim: true,
    },
    tipoconta: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: [true, 'O email é obrigatório'],
        trim: true,
        validate: {
            validator(username) {
              return validator.isEmail(username);
            },
            message: '{VALUE} não é um email válido',
        }
    },
    password:{
        type: String,
        required: [true, 'A senha é obrigatória'],
        trim: true,
        minlength: [4, 'Password need to be longer!'],
    }
})

alunosSchema.plugin(normalize);

var Alunos = mongoose.model('Alunos', alunosSchema);


module.exports = Alunos;