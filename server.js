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
const users_report = require('./routes/api/users_report');
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err));

autoIncrement.initialize(mongoose.createConnection(db));
app.use(passport.initialize());
//Passport Config --> jwt strategy to implement passport.
require('./config/passport')(passport, autoIncrement);
const UserModel = require('./models/User')(autoIncrement);
console.log(UserModel)

const user1 = new UserModel({
nom: "Alami",
prenom: "Mustapha",
email: "ksmaouhoub@gmail.com",
password: "mypass"
});

// user1.save((err) => {
//   if(err)
//     console.log(err)
//   else
//     console.log("success")
// });

app.use('/api/users', users);
app.use('/api/users_report', users_report);








app.listen(port, () => console.log('Server running on port 5000'));




