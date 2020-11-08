const db = require('../models');

// Defining methods for the ordersController
module.exports = {
  findAll: function(req, res) {
    db.Order
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Order
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Order
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Order
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByRetailerId: function(req, res) {
    db.Order
      .find({'retailer_id': req.params.retailer_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOrder: function(req, res) {
    console.log(req.body)
    db.Order
      .findOneAndUpdate({_id: req.params.id}, { "$set": req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
