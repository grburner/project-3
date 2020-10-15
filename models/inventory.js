const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    retailer_product_id: { 
        type: Schema.RetailerProduct.ObjectId, 
        required: true 
      },
      retailer_id: { 
        type: Schema.Retailer.ObjectId, 
        required: true 
      },
      list_date: { 
        type: Date, 
        default: Date.now 
      },
      units: Number, 
      price: Number
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;