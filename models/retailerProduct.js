const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const retailerProductSchema = new Schema({
  product_id: { 
    type: Schema.Product.ObjectId, 
    required: true 
  },
  retailer_id: { 
    type: Schema.Retailer.ObjectId, 
    required: true 
  },
  description: String//,
  //image: mime
});

const RetailerProduct = mongoose.model("RetailerProduct", retailerProductSchema);

module.exports = RetailerProduct;