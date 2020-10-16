const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user_id: { 
    type: Schema.Types.ObjectId, 
    ref: "User",
    required: true 
  },
  retailer_id: { 
    type: Schema.Types.ObjectId, 
    ref: "Retailer",
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: String,
  detail: [{
    inventory_id: {
      type: Schema.Types.ObjectId, 
      ref: "Inventory"
    },
    quantity: Number,
    price: Number
  }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;