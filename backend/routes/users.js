const router = require("express").Router();
let User = require("../models/user.model");
const multer = require("multer");

//defining storage for images
const storage = multer.diskStorage({
  //file destinations
  destination: function (request, file, callback) {
    callback(null, "../public/userProfile");
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

//route to get ALL users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to add a USER
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

//Route to get a specific user based on ID
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Route to update user based on ID
router.route("/update/:id").post(upload.single("photo"), (req, res) => {
  User.findById(req.body.id)
    .then((user) => {
      user.email = req.body.profileEmail;
      user.firstName = req.body.profileFirstName;
      user.lastName = req.body.profileLastName;
      user.phoneNumber = req.body.profilePhoneNumber;
      user.profileImage = req.file.filename;
      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error is: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
