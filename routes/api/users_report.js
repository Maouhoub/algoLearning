const express = require("express");
const mongoose = require("mongoose");
const db = require("../../config/keys").mongoURI;
const router = express.Router();
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.createConnection(db));

const UserModel = require("../../models/User")(autoIncrement);
//user_id

router.post("/user", (req, res) => {
  
  User.findOne({
    
    email: req.body.email,
    //prneom: req.body.prenom
  })
    .then(user => {
      //console.log(user)
      if(user)
      res.json({
        user_info: user
      });
      else
      res.json({
        user_info: "user not found!"
      });
    })
    .catch(err => {
      res.status(404);
      res.json({
        message: "Error"
      });
    });
});
module.exports = router;
