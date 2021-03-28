import Footer from "./Footer";
import "./EditProduct.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";


function EditProduct() {

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
    //making a POST request to this url with the product the user wants to edit
    axios
      .post("http://localhost:5000/products/update/", product)
      .then((res) => console.log(res.data));

    //resets the form back to empty
    e.target.reset();

    //sets the variables back to default if a user wants to edit another product
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
            <h2 className="editProductHeader">Edit Product Information</h2>
            <div className="mainEditProduct">
                <div className="addImageEditProduct">
                    <button className="editProductImage">Add/Delete Image(s) +/-
                </button>
                </div>
                <div className="editProductLabels">
                    <form className="editProductForm" onSubmit={onSubmit}>
                        <label>
                            Product Name:
                    <input type="text" name="Edit Product name" className="editProductInput" placeholder="Edit Product name" />
                        </label>
                        <label>
                            Cost:
                    <input type="text" name="Edit Cost of the Product" className="editProductInput" placeholder="Edit Cost of the Product" />
                        </label>
                        <label>
                            Product Condition :
                    <input type="text" name="Edit Product Condition" className="editProductInput" placeholder="Edit Product Condition" />
                        </label>
                        <label>
                            Category:
                    <input type="text" name="Select Category" className="editProductInput" placeholder="Select Category" />
                        </label>
                        <label>
                            Description:
                    <input type="text" name="Product Description" className="editProductInput" placeholder="Edit Description" />
                        </label>
                        <button type="submit" className="saveChangesButton">
                            Save Changes
                    </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EditProduct;
