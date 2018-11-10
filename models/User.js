const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
nom : {
  type: String,
  required: true
},

prenom : {
  type: String,
  required: true
},

role :{
  type: String,
  required: true,
  default: "utilisateur"
  
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


});

//module.exports = User = mongoose.model('users', UserSchema);
module.exports = (autoIncrement) => {
  UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'user_id', startAt: 1});
  User = mongoose.model('users', UserSchema);
  
  return User;
}
