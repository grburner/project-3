const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  username: { 
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
  // ships_to: [String],
  cc_processing: String, //bcrypt.String,
  bio: String,

  //consumer
  birth_date: { 
    type: Date,
    // validate: function(input) {
    //   return typeof new Date(input) === 'date' && new Date(input) >= Date.now - (21*365*24*60*60*1000);
    // },
    // message: input => 'You must be 21 to register!'
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

userSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define pre-hooks for the save method
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;