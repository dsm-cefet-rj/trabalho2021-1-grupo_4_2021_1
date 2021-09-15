const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const turmaSchema = new Schema({
    nome: {
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

export default turmaSchema;