const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({


ordre : {
  type: Number,
  required: true
},
//examen_de_passage ici - collection de questions du niveau
//array des exercices ids


});

//module.exports = Niveau = mongoose.model('niveaux', UserSchema);
module.exports = (autoIncrement) => {
  UserSchema.plugin(autoIncrement.plugin, { model: 'Niveau', field: 'niveau_id', startAt: 1});
  Niveau = mongoose.model('niveaux', UserSchema);
  
  return Niveau;
}