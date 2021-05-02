const router = require("express").Router();
let Wishlist = require("../models/wishlist.model");

//Route to get ALL items in wishlist
router.route("/").get((req, res) => {
  Wishlist.find()
    .then((wishlistItems) => res.json(wishlistItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to add an item to Wishlist
router.route("/addWishlistItem").post((req, res) => {
  const wishlistProduct = req.body.wishlistProduct;
  const wishlistOwner = req.body.wishlistOwner;

  const newWishlistItem = new Wishlist({
    wishlistProduct,
    wishlistOwner,
  });

  newWishlistItem
    .save()
    .then(() => res.json("Wishlist Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get a specific wishlist item based on ID
router.route("/:id").get((req, res) => {
  Wishlist.findById(req.params.id)
    .then((wishlistItem) => res.json(wishlistItem))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete an item on wishlist based on ID
router.route("/:id").delete((req, res) => {
  Wishlist.findByIdAndDelete(req.params.id)
    .then(() => res.json("Wishlist Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
