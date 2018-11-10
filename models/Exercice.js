const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

// exercice_id: {
//   type: Number
// },

ordre : {
  type: Number,
  required: true
},

//array des questions id


});

module.exports = (autoIncrement) => {
  UserSchema.plugin(autoIncrement.plugin, { model: 'Exercice', field: 'exercice_id', startAt: 1});
  Exercice = mongoose.model('exercices', UserSchema);
  //console.log('You are great!' + typeof Exercice);
  
  return Exercice;
}