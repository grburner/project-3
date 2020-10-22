const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  retailer_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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
  tags: [String],
  units: Number,
  price: Number
  //, image: mime
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;