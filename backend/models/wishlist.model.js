const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  wishlistProduct: {
    type: String,
    required: true,
  },
  wishlistOwner: {
    type: String,
    required: true,
  },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
