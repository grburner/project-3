const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user_id: { 
    type: Schema.User.ObjectId, 
    required: true 
  },
  inventory_id: { 
    type: Schema.Inventory.ObjectId, 
    required: true 
  }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;