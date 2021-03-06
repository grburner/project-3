const db = require('../models');

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
  findOne: function(req, res, next) {
    console.log(req.body);
    next();
  },
  create: function(req, res) {
    db.User
      .findOne({ username: req.body.username }, (err, user) => {
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          res.json({
            error: `Sorry, already a user with the username: ${req.body.username}`
          });
        }
        else {
          console.log('user being created: ', req.body);
          const newUser = new db.User(req.body);
          newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            res.json(savedUser);
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body);
    db.User
      .findByIdAndUpdate({ _id: req.params.id }, { cart: req.body } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllById: function(req, res) {
    db.User
      .find({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.User
      .find({username: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
    console.log('Hit the logout route');
  },
  updateInfo: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
