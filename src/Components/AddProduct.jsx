import Footer from "./Footer";
import "./AddProduct.css";
import "./Pages.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function AddProduct() {
  //setting values to nothing by default, setting state of current variables
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productCondition, setProductCondition] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();

  //when user submits form, this function is called
  function onSubmit(e) {
    //prevents default html form actions and allows us to customize our own
    e.preventDefault();

    //setting product object to pass as a parameter for post request
    const data = new FormData();
    data.append("photo", productImage);
    data.append("productName", productName);
    data.append("productDescription", productDescription);
    data.append("productPrice", productPrice);
    data.append("productCondition", productCondition);
    data.append("productCategory", productCategory);
    data.append("productEmail", currentUser.email);

    console.log(data);
    //making a POST request to this url with the product the user wants to add
    axios
      .post("http://localhost:5000/products/addproduct", data)
      .then((res) => console.log(res.data));

    //resets the form back to empty
    e.target.reset();

    //sets the variables back to default if a user wants to add another product
    setProductName("");
    setProductDescription("");
    setProductPrice(null);
    setProductCondition("");
    setProductCategory("");
    setProductImage("");

    window.alert("Product Added.")

    history.push("/profile")

  }

  //these onChange functions are called whenever a label is changed so the value of
  //whatever product__ is updated when changed
  function onChangeProductName(e) {
    setProductName(e.target.value);
  }

  function onChangeProductDescription(e) {
    setProductDescription(e.target.value);
  }

  function onChangeProductPrice(e) {
    setProductPrice(e.target.value);
  }

  function onChangeProductCondition(e) {
    console.log(e.target.value);
    setProductCondition(e.target.value);
  }

  function onChangeProductCategory(e) {
    console.log(e.target.value);
    setProductCategory(e.target.value);
  }

  function onChangeProductImage(e) {
    console.log(e.target.files[0]);
    setProductImage(e.target.files[0]);
  }

  return (
    <div className="pageContent">
      <h2 className="addProductHeader">Add a Product</h2>
      <div className="mainAddProduct">
        {/* <div className="addImageAddProduct">
          <label className="addProductImage">Add Image(s) +</label>
          <input type="file" name="image" id="image" accept="image/*" />
        </div> */}
        <div className="productLabels">
          <form
            className="productForm"
            onSubmit={onSubmit}
            encType="multipart/form-data"
          >
            <label className="productName">
              Product Name:
              <input
                type="text"
                name="productName"
                placeholder="Enter Product name"
                className="addProductInput"
                onChange={onChangeProductName}
              />
            </label>
            <label className="productCost">
              Cost:
              <input
                type="text"
                name="productPrice"
                placeholder="Enter Cost of the Product"
                className="addProductInput"
                onChange={onChangeProductPrice}
              />
            </label>
            <label className="productCondition">
              Product Condition :
              <select
                name="productCondition"
                placeholder="Select Condition"
                className="addProductInput"
                onChange={onChangeProductCondition}
              >
                <option value="">Select Category</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </label>

            <label className="productCategory">
              Category:
              <select
                name="productCategory"
                placeholder="Select Category"
                className="addProductInput"
                onChange={onChangeProductCategory}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="DormDecor">Dorm Decor</option>
                <option value="Books">Books</option>
                <option value="Apparel">Apparel</option>
              </select>
            </label>

            <label className="productDescription">
              Description:
              <input
                type="text"
                name="productDescription"
                placeholder="Product Description"
                className="addProductInput"
                onChange={onChangeProductDescription}
              />
            </label>
            <label className="productDescription">
              Add Image
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="addProductInput"
                onChange={onChangeProductImage}
              />
            </label>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddProduct;
