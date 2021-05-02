//schema for a product
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productCondition: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productEmail: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    default: "Rattler.jpeg",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
