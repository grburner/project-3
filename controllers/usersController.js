const db = require('../models');
const passport = require('../passport');

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
        .findOne({ username: username }, (err, user) => {
          if (err) {
              console.log('User.js post error: ', err)
          } else if (user) {
              res.json({
                  error: `Sorry, already a user with the username: ${username}`
              })
          }
          else {
              const newUser = new User({
                  username: username,
                  password: password
              })
              newUser.save((err, savedUser) => {
                  if (err) return res.json(err)
                  res.json(savedUser)
              })
          }
      })
      //.create(req.body)

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
