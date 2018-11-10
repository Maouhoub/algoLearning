const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
name : {
  type: String,
  required: true
},


email : {
  type: String,
  required: true
},
password : {
  type: String,
  required: true
},
avatar : {
  type: String,
},
date : {
  type: Date,
  default: Date.now
},

id_cours_courant: {
  type: Number

},

niveau_courant_id: {
  type: Number
},

exercice_courant_id: {
  type: Number
}

});

//module.exports = User = mongoose.model('users', UserSchema);
module.exports = (autoIncrement) => {
  UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'user_id', startAt: 1});
  User = mongoose.model('users', UserSchema);
  
  return User;
}
