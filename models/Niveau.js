const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NiveauShema = new Schema({
    id_Cours : {
        type: String,
        required: true
    },
    num_Niveau : {
        type: Intl,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    nbr_consultant : {
        type: Intl,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Niveau = mongoose.model('niveaux', NiveauShema);
