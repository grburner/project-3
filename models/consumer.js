const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const consumerSchema = new Schema({
  user_id: { 
      type: Schema.Types.ObjectId, 
      ref: "User",
      required: true 
    },
  name: { 
      type: String, 
      required: true 
    },
  address_street1: String,
  address_street2: String,
  address_city: String,
  address_state: String,
  address_zip: String,
  birth_date: { 
      type: Date,
      validate: function(input) {
          return typeof new Date(input) === 'date' && new Date(input) >= Date.now - (21*365*24*60*60*1000)
      },
      message: input => "You must be 21 to register!"
    },
  cc_on_file: [{
          number: bcrypt.String,
          expiration_month: Number,
          expiration_year: Number
      }],
  favorites: [{
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      }
  }]
});


const Consumer = mongoose.model("Consumer", consumerSchema);

module.exports = Consumer;