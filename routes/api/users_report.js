const express = require('express');
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;
const router = express.Router();
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.createConnection(db));

const UserModel = require('../../models/User')(autoIncrement);
//user_id

router.post("/user", (req, res) => {
  console.log(req.body)
      User.findOne({
        user_id: req.body.user_id
        })
        .then((user) => res.json({
          user_info: user
        }))
        .catch((err) => {
          res.status(404);
          res.json({
            message: "utilisater introuvable"
          })
        });
    })
module.exports = router