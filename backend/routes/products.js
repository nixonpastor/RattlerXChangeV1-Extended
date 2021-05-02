// Nixon Pastor
// Product Routing file for API and Backend
const router = require("express").Router();
let Product = require("../models/product.model");
const multer = require("multer");

//defining storage for images
const storage = multer.diskStorage({
  //file destinations
  destination: function (request, file, callback) {
    callback(null, "../public/images");
  },

  //add back file extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload paramters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldsize: 1024 * 1024 * 3,
  },
});

//Route to get all PRODUCTS from database
router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Route to add a product to database
router.route("/addProduct").post(upload.single("photo"), (req, res) => {
  //setting values coming from front end to create a new product object
  const productName = req.body.productName;
  const productDescription = req.body.productDescription;
  const productPrice = Number(req.body.productPrice);
  const productCondition = req.body.productCondition;
  const productCategory = req.body.productCategory;
  const productEmail = req.body.productEmail;
  const productImage = req.file.filename;

  const newProduct = new Product({
    productName,
    productPrice,
    productCondition,
    productCategory,
    productDescription,
    productEmail,
    productImage,
  });

  //trying to save new product to database
  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to get a specific product based on ID
router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to delete a product based off of ID
router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to update a product based off of ID
router.route("/update/:id").post(upload.single("photo"), (req, res) => {
  Product.findById(req.body.id)
    .then((product) => {
      product.productName = req.body.productName;
      product.productDescription = req.body.productDescription;
      product.productPrice = Number(req.body.productPrice);
      product.productCondition = req.body.productCondition;
      product.productCategory = req.body.productCategory;
      product.productEmail = req.body.productEmail;
      product.productImage = req.file.filename;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
