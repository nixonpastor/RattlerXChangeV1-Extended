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

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addProduct").post(upload.single("photo"), (req, res) => {
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

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.productName = req.body.productName;
      product.productDescription = req.body.productDescription;
      product.productPrice = Number(req.body.productPrice);
      product.productCondition = req.body.productCondition;
      product.productCategory = req.body.productCategory;
      product.productEmail = req.body.productEmail;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
