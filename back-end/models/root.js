const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const escolaSchema = new Schema({
    id: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

escolaSchema.plugin(normalize);

var Escola = mongoose.model('Escola', escolaSchema);


module.exports = Escola;