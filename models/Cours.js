const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({


nom_cours : {
  type: String,
  required: true
},
//codeAcademy login : mustapha paas same + 1.


date_ajout: {
  type: Date,
  required: true,
  default: Date.now
},



//tableau des ids des niveax

});

//module.exports = Cours = mongoose.model('cours', UserSchema);

module.exports = (autoIncrement) => {
  UserSchema.plugin(autoIncrement.plugin, { model: 'Cours', field: 'cours_id', startAt: 1});
  Cours = mongoose.model('cours', UserSchema);
  
  return Cours;
}