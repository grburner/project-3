const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_number: { 
      type: Number, 
      default: Math.floor(Math.random() * 9000000000) + 1000000000,
      required: true 
    },
  name: { 
      type: String, 
      required: true 
    },
  description: String,
  country: String,
  geo2: String,
  type1: String,
  type2: String,
  size: String,
  grape_blend: String,
  tags: [String]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;