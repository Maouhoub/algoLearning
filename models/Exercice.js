const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciceShema = new Schema({
    id_Niveau : {
        type: String,
        required: true
    },
    num_Exercice : {
        type: Intl,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    is_qcm:{
        type: Boolean,
        default: false
    },
    question : {
        type: String,
        required: true
    },
    reponses: [{
         reponse: String, 
         is_correct: Boolean 
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = exercice = mongoose.model('exercice', ExerciceShema);
