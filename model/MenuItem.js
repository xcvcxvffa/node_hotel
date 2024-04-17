const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true, // Ensure the name is required for all menu items
  },
  price: {
    type: Number,
    required: true, // Ensure the price is required for all menu items
  },
  taste: {
    type: String,
    enum: ["Spicy", "Sweet", "Sour", "Salty", "Bitter", "Umami"], // Ensure enum values cover all possible tastes
  },
  is_drink: {
    type: Boolean,
    default: false, // Default to false for is_drink field
  },
  ingredients: {
    type: [String],
    default: [], // Default to an empty array for ingredients
  },
  num_sales: {
    type: Number,
    default: 0, // Default to 0 for num_sales
  },
});

// Create a model based on the schema (use singular and capitalized model name)
const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
