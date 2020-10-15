const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
  order_id: { 
    type: Schema.Order.ObjectId, 
    required: true 
  },
  inventory_id: { 
    type: Schema.Inventory.ObjectId, 
    required: true 
  },
  quantity: Number,
  price: Number//,
  //line_total: quantity + price
});

const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

module.exports = OrderDetail;