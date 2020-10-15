const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

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
  password: bcrypt.String
});

const User = mongoose.model("User", userSchema);

module.exports = User;