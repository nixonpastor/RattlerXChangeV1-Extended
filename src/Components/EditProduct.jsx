import Footer from "./Footer";
import "./EditProduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function EditProduct(props) {
  //set state variables for edit product page
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCondition, setProductCondition] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    function getProducts() {
      //get request to get all products
      axios
        .get(
          "http://localhost:5000/products/" +
            props.location.productProps.productID,
          { id: props.location.productProps.productID }
        )
        .then((res) => {
          if (isLoading) {
            setProduct(res.data);
            console.log(product);
            setLoading(false);
          }
        });

      console.log("check new ");
      console.log(product);
      console.log(currentUser.email.toLowerCase());
    }
    getProducts();
  }, [product, isLoading, props.location.productProps.productID]);

  function onSubmit(e) {
    e.preventDefault();
    //setting product object to pass as a parameter for post request
    const updatedProduct = new FormData();
    //updatedProduct.append("photo", profileImage);
    updatedProduct.append("id", product._id);
    updatedProduct.append("productName", productName);
    updatedProduct.append("productPrice", productPrice);
    updatedProduct.append("productDescription", productDescription);
    updatedProduct.append("productCondition", productCondition);
    updatedProduct.append("productCategory", productCategory);
    updatedProduct.append("photo", productImage);
    updatedProduct.append("productEmail", currentUser.email.toLowerCase());

    console.log(Object.fromEntries(updatedProduct));
    console.log("Hello");
    //making a POST request to this url with the product the user wants to add
    axios
      .post(
        "http://localhost:5000/products/update/" + product._id,
        updatedProduct
      )
      .then((res) => console.log(res.data));

    history.push("/profile");
  }

  //these functions below get current state if inputs are changed
  function onChangeProductName(e) {
    setProductName(e.target.value);
    console.log(productName);
  }

  function onChangeProductCost(e) {
    setProductPrice(e.target.value);
    console.log(productPrice);
  }

  function onChangeProductCondition(e) {
    setProductCondition(e.target.value);
    console.log(productCondition);
  }

  function onChangeProductCategory(e) {
    setProductCategory(e.target.value);
    console.log(productCategory);
  }

  function onChangeProductDescription(e) {
    setProductDescription(e.target.value);
    console.log(productDescription);
  }

  function onChangeProductImage(e) {
    setProductImage(e.target.files[0]);
    console.log(productImage);
  }

  return (
    <div className="pageContent">
      <h2 className="editProductHeader">Edit Product Information</h2>
      <div className="mainEditProduct">
        <div className="addImageEditProduct">
          {/* <button className="editProductImage">Add/Delete Image(s) +/- /> */}
          <img
            className="productImageProductInfo"
            alt={product.productName}
            src={"images/" + product.productImage}
          />
        </div>
        <div className="editProductLabels">
          <form
            className="editProductForm"
            onSubmit={onSubmit}
            encType="multipart/form-data"
          >
            <label>
              Product Name:
              <input
                type="text"
                name="productName"
                className="editProductInput"
                defaultValue={product.productName}
                onChange={onChangeProductName}
              />
            </label>
            <label>
              Cost:
              <input
                type="text"
                name="productPrice"
                className="editProductInput"
                defaultValue={product.productPrice}
                onChange={onChangeProductCost}
              />
            </label>

            <label>
              Product Condition :
              <select
                name="productCondition"
                className="editProductInput"
                defaultValue={product.productCondition}
                onChange={onChangeProductCondition}
              >
                <option value="">Select Category</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </label>

            <label>
              Category:
              <select
                name="productCategory"
                className="editProductInput"
                defaultValue={product.productCategory}
                onChange={onChangeProductCategory}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="DormDecor">Dorm Decor</option>
                <option value="Books">Books</option>
                <option value="Apparel">Apparel</option>
              </select>
            </label>
            <label>
              Description:
              <input
                type="text"
                name="productDescription"
                className="editProductInput"
                defaultValue={product.productDescription}
                onChange={onChangeProductDescription}
              />
            </label>

            <label className="editProductInput">
              Add Image
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="addProductInput"
                onChange={onChangeProductImage}
              />
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
