const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const retailerSchema = new Schema({
    user_id: { 
        type: Schema.User.ObjectId, 
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
    ships_to: [String],
    cc_processing: bcrypt.String,
    bio: String
});

const Retailer = mongoose.model("Retailer", retailerSchema);

module.exports = Retailer;