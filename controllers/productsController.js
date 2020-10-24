const db = require('../models');

// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .limit(20)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Product
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Product
      .find({name: { $regex: req.params.name }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByRetailerId: function(req, res) {
    db.Product
      .find({retailer_id: req.params.retailer_id})
      .then(dbModel => 
        res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByIdAndUpdate: function(req, res) {
    db.Product
      .findByIdAndUpdate({_id: req.id}, {body: req.body})
      .then(res => {
        console.log(res)
      })
      .then(dbModel => 
        res.json(dbModel))
      .catch(err => req.status(422).json(err))
  }
};
