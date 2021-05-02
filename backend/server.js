const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//create a server on port 5000
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//defining mongoose api keys to access database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//open a connection for the mongoose database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// the routes for the endpoints
const productRouter = require("./routes/Products.js");
app.use("/products", productRouter);

const userRouter = require("./routes/users.js");
app.use("/users", userRouter);

const wishlistRouter = require("./routes/wishlist.js");
app.use("/wishlists", wishlistRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
