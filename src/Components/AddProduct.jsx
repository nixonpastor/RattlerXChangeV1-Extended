import Footer from "./Footer";
import "./AddProduct.css";
import "./Pages.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

function AddProduct() {
  //setting values to nothing by default, setting state of current variables
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productCondition, setProductCondition] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const { currentUser } = useAuth();

  //when user submits form, this function is called
  function onSubmit(e) {
    //prevents default html form actions and allows us to customize our own
    e.preventDefault();
    //setting a product object to the current values from the form
    const product = {
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productCondition: productCondition,
      productCategory: productCategory,
      productEmail: currentUser.email,
    };

    console.log(product);
    //making a POST request to this url with the product the user wants to add
    axios
      .post("http://localhost:5000/products/addproduct", product)
      .then((res) => console.log(res.data));

    //resets the form back to empty
    e.target.reset();

    //sets the variables back to default if a user wants to add another product
    setProductName("");
    setProductDescription("");
    setProductPrice(null);
    setProductCondition("");
    setProductCategory("");
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
    setProductCondition(e.target.value);
  }

  function onChangeProductCategory(e) {
    setProductCategory(e.target.value);
  }

  return (
    <div className="pageContent">
      <h2 className="addProductHeader">Add a Product</h2>
      <div className="mainAddProduct">
        <div className="addImageAddProduct">
          <button className="addProductImage">Add Image(s) +</button>
        </div>
        <div className="productLabels">
          <form className="productForm" onSubmit={onSubmit}>
            <label className="productName">
              Product Name:
              <input
                type="text"
                name="Enter Product name"
                placeholder="Enter Product name"
                className="addProductInput"
                onChange={onChangeProductName}
              />
            </label>
            <label className="productCost">
              Cost:
              <input
                type="text"
                name="Enter Cost of the Product"
                placeholder="Enter Cost of the Product"
                className="addProductInput"
                onChange={onChangeProductPrice}
              />
            </label>
            <label className="productCondition">
              Product Condition :
              <input
                type="text"
                name="Enter Product Condition"
                placeholder="Enter Product Condition"
                className="addProductInput"
                onChange={onChangeProductCondition}
              />
            </label>
            <label className="productCategory">
              Category:
              <input
                type="text"
                name="Select Category"
                placeholder="Select Category"
                className="addProductInput"
                onChange={onChangeProductCategory}
              />
            </label>
            <label className="productDescription">
              Description:
              <input
                type="text"
                name="Product Description"
                placeholder="Product Description"
                className="addProductInput"
                onChange={onChangeProductDescription}
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
