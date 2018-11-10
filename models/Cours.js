const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursShema = new Schema({
    nom_Cours : {
        type: String,
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

module.exports = Cours = mongoose.model('cours', CoursShema);
