const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

Question : {
  type: Number,
  required: true
},

Reponse: {
  type: String,
  required: true
},




});

//module.exports = Question = mongoose.model('question', UserSchema);
module.exports = (autoIncrement) => {
  UserSchema.plugin(autoIncrement.plugin, { model: 'Question', field: 'question_id', startAt: 1});
  Question = mongoose.model('questions', UserSchema);
  
  return Question;
}