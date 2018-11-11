const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const db = require('../../config/keys').mongoURI;
const gravatar = require("gravatar");
const keys = require('../../config/keys'); 
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const passport = require('passport');
autoIncrement.initialize(mongoose.createConnection(db));
const User = require("../../models/User")(autoIncrement);
router.get("/test", (req, res) =>
  res.json({
    msg: "users work"
  })
);

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      console.log(user)
      return res.status(400).json({ email: "email deja existant!" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
 //console.log('Recieved pasword : ' + password);
 
  User.findOne({email}).then(user => {
    if(!user)
        {
          return res.status(404).json({ email: "User not found! " });
        }
    //check password!
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(isMatch)
           {
             //res.json({msg: 'success'});
             //user matched

             const payload = {
               id: user.id,
               name: user.name,
               avatar: user.avatar
             }
             
             jwt.sign(payload, keys.secretOrKey,{expiresIn: 3600}, 
              (err, token) => res.json({
                success: true,
                token: 'Bearer ' + token
              }));
           }
        else
           return res.status(400).json({password: 'password incorrect'})

      }).catch((err) => console.log(err) )
  });
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json(req.user);
})

module.exports = router;
