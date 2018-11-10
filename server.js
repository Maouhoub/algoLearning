const express = require('express');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//DB Config
const db = require('./config/keys').mongoURI;
const port = 5000;
const users = require('./routes/api/users');
//connect to MongoDB

//tester la b

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err));

autoIncrement.initialize(mongoose.createConnection(db));
app.use(passport.initialize());
//Passport Config --> jwt strategy to implement passport.
require('./config/passport')(passport, autoIncrement);

const Cours = require('./models/Cours')(autoIncrement);
const Exercice = require('./models/Exercice')(autoIncrement);
 // console.log(exercice)

 const cours = new Cours({
  nom_cours: 'Java programming',
  niveaux: [1, 2, 3]
 })
//  cours.save((err) => {
//   if(!err)
//     console.log('successs')
//   else
//     console.log(err)
//  })

Cours.find()
.then((cours) => {
  console.log(cours);
})
.catch((err) => {
  console.log(err);
})
app.use('/api/users', users);
//1 -- ajout d'un cours






app.listen(port, () => console.log('Server running on port 5000'));




