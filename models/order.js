const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user_id: { 
    type: Schema.User.ObjectId, 
    required: true 
  },
  retailer_id: { 
    type: Schema.Retailer.ObjectId, 
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;