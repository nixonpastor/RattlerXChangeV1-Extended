import Footer from "./Footer";
import "./EditProduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function EditProduct(props) {

  //setting values to nothing by default, setting state of current variables
  // const [productName, setProductName] = useState("");
  // const [productDescription, setProductDescription] = useState("");
  // const [productPrice, setProductPrice] = useState(null);
  // const [productCondition, setProductCondition] = useState("");
  // const [productCategory, setProductCategory] = useState("");
  // const { currentUser } = useAuth();

  //console.log(props.location.productProps.productID)

  // //when user submits form, this function is called
  // function onSubmit(e) {
  //   //prevents default html form actions and allows us to customize our own
  //   e.preventDefault();
  //   //setting a product object to the current values from the form
  //   const product = {
  //     productName: productName,
  //     productDescription: productDescription,
  //     productPrice: productPrice,
  //     productCondition: productCondition,
  //     productCategory: productCategory,
  //     productEmail: currentUser.email,
  //   };

  //   console.log(product);
  //   //making a POST request to this url with the product the user wants to edit
  //   axios
  //     .post("http://localhost:5000/products/update/", product)
  //     .then((res) => console.log(res.data));

  //   //resets the form back to empty
  //   e.target.reset();

  //   //sets the variables back to default if a user wants to edit another product
  //   setProductName("");
  //   setProductDescription("");
  //   setProductPrice(null);
  //   setProductCondition("");
  //   setProductCategory("");
  // }

  // //these onChange functions are called whenever a label is changed so the value of
  // //whatever product__ is updated when changed
  // function onChangeProductName(e) {
  //   setProductName(e.target.value);
  // }

  // function onChangeProductDescription(e) {
  //   setProductDescription(e.target.value);
  // }

  // function onChangeProductPrice(e) {
  //   setProductPrice(e.target.value);
  // }

  // function onChangeProductCondition(e) {
  //   setProductCondition(e.target.value);
  // }

  // function onChangeProductCategory(e) {
  //   setProductCategory(e.target.value);
  // }

  // const [product, setProduct] = useState({
  //   //_id: props.location.productProps.productId,
  //   _id: "",
  //   productName: "No Product Info",
  //   productPrice: 0,
  //   productCondition: "No Condition Found",
  //   productCategory: "No Category Found",
  //   productDescription: "Null",
  //   productEmail: "",
  //   __v: 0,
  // });

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
      //if (props.location.productProps.productID !== null) {
        // axios
        //   .get(
        //     "http://localhost:5000/products/").then((res) => {
        //     if (isLoading) {
        //       setProducts(res.data);
        //       console.log(products);
        //       setLoading(false);
        //     }
        //   });

        axios.get( "http://localhost:5000/products/" + props.location.productProps.productID, 
        {id: props.location.productProps.productID}).then((res) => {
          if (isLoading) {
            setProduct(res.data);
            console.log(product);
            setLoading(false);
          }
        });

        console.log("check new ")
        console.log(product)
        console.log(currentUser.email.toLowerCase())

          // products.map((product) => {
          //   if (product._id === props.location.productProps.productID) {
          //     setProductName(product);
          //     setProductPrice(product.productPrice);
          //     setProductCondition(product.productCondition);
          //     setProductCategory(product.productCategory);
          //     setProductDescription(product.productDescription)
          //     setProductImage(product.productImage)
          //   }
          //   return product;
          // });
      }
    getProducts();
  }, [product, isLoading, props.location.productProps.productID]);

  function onSubmit(e) {

    e.preventDefault()
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
    updatedProduct.append("productEmail", currentUser.email.toLowerCase())

    console.log(Object.fromEntries(updatedProduct));
    console.log("Hello")
    //making a POST request to this url with the product the user wants to add
    axios
      .post("http://localhost:5000/products/update/" + product._id, updatedProduct)
      .then((res) => console.log(res.data));

    history.push("/profile");
  }

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
          <form className="editProductForm" onSubmit={onSubmit} encType="multipart/form-data">
            <label>
              Product Name:
                    <input 
                    type="text" 
                    name= "productName"
                    className="editProductInput" 
                    defaultValue={product.productName} 
                    onChange={onChangeProductName}/>
            </label>
            <label>
              Cost:
                    <input type="text" 
                    name="productPrice" 
                    className="editProductInput" 
                    defaultValue={product.productPrice}
                    onChange={onChangeProductCost} />
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
                    onChange={onChangeProductDescription} />
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
