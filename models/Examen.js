const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamenShema = new Schema({
    id_Niveau : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    questions: [{
        is_qcm:{
            type: Boolean,
            default: false
        },
        question: String, 
        num_question: Intl,
        reponses: [{
            reponse: String, 
            is_correct: Boolean 
        }],
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = examen = mongoose.model('examen', ExamenShema);
