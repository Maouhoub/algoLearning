const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const UserF = require('../models/User');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;


module.exports = (passport, autoIncrement) => {
  console.log(autoIncrement);
  const User = UserF(autoIncrement);
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      console.log('configuring !');
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));



    }

  ));
}