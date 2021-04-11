const router = require("express").Router();
let User = require("../models/user.model");
const multer = require("multer");

//defining storage for images
const storage = multer.diskStorage({
  //file destinations
  destination: function (request, file, callback) {
    callback(null, "../public/userImages");
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
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addUser").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;

  const newUser = new User({
    email,
    firstName,
    lastName,
    phoneNumber,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.email = req.body.email;
      user.firstName = req.body.firstName;
      product.lastName = req.body.lastName;
      product.phoneNumber = req.body.phoneNumber;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
