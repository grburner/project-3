const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  role: String,
  password: String, //bcrypt.String
  address_street1: String,
  address_street2: String,
  address_city: String,
  address_state: String,
  address_zip: String,
  phone_number: String,

  //retailer
  company_name: String, 
  ships_to: [String],
  cc_processing: String, //bcrypt.String,
  bio: String,

  //consumer
  birth_date: { 
    type: Date,
    validate: function(input) {
      return typeof new Date(input) === 'date' && new Date(input) >= Date.now - (21*365*24*60*60*1000);
    },
    message: input => 'You must be 21 to register!'
  },
  cc_on_file: [{
    cc_number: String, //bcrypt.String,
    expiration_month: Number,
    expiration_year: Number
  }],
  favorites: [{
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  }]






});

const User = mongoose.model('User', userSchema);

module.exports = User;