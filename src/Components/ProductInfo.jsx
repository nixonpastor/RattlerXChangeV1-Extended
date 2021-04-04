import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./ProductInfo.css";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductInfo(props) {
  //   console.log(props.location.productProps.productId);
  //   //   const [product, setProduct] = useState(null);
  //   const [isLoading, setLoading] = useState(true);

  //   axios
  //     .get(
  //       "http://localhost:5000/products/" + props.location.productProps.productId
  //     )
  //     .then((res) => {
  //       if (isLoading) {
  //         console.log(res.data);
  //         // setProduct(res.data);
  //         // console.log(product);
  //         setLoading(false);
  //       }
  //     });

  const [product, setProduct] = useState({
    _id: props.location.productProps.productId,
    productName: "No Product Info",
    productPrice: 0,
    productCondition: "No Condition Found",
    productCategory: "No Category Found",
    productDescription: "Null",
    __v: 0,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    function getProducts() {
      if (props.location.productProps.productId !== null) {
        axios
          .get(
            "http://localhost:5000/products/" +
              props.location.productProps.productId
          )
          .then((res) => {
            if (isLoading) {
              setProduct(res.data);
              console.log(product);
              setLoading(false);
            }
          });
      }
    }
    getProducts();
  }, [product, isLoading, props.location.productProps.productId]);

  return (
    <div className="pageContent">
      <h2 className="productInfoHeader">Product Information</h2>
      <div className="mainProductInfo">
        <div className="imageProductInfo">
          <button
            className="productInfoImageButton" /*style="background: url('Rattler.jpeg')"*/
          >
            {" "}
            Image Goes Here
          </button>
        </div>
        <div className="productLabels">
          <form className="productInfoForm">
            <label>
              Product Name:
              <input
                type="button"
                name="Product Name"
                className="productInfoField"
                value={product.productName}
              />
            </label>
            <label>
              Cost:
              <input
                type="button"
                name="Cost"
                className="productInfoField"
                value={product.productPrice}
              />
            </label>
            <label>
              Product Condition :
              <input
                type="button"
                name="Condition"
                className="productInfoField"
                value={product.productCondition}
              />
            </label>
            <label>
              Category:
              <input
                type="button"
                name="Category"
                className="productInfoField"
                value={product.productCategory}
              />
            </label>
            <label>
              Description:
              <input
                type="button"
                name="Description"
                className="productInfoField"
                value={product.productDescription}
              />
            </label>

            <div className="buttons">
              <div>
                <Link to="/outlook">
                <button type="submit" className="contactSellerButton">
                  Contact Seller
                  <div class="buttonTextSpace" />
                  <i class="fas fa-envelope"></i>
                </button>
                </Link>
              </div>
              <div class="divider" />
              <div>
                <Link to="/wishlist">
                <button type="submit" className="wishlistButton">
                  Add to My Wishlist
                  <div class="buttonTextSpace" />
                  <i class="fas fa-heart"></i>
                </button>
                </Link>
              </div>
            </div>


            <div lassName="sellerInfoButtonDiv">
            <div class="buttonSpace" />

              <Link to="/sellerInfo">          
              <button to= {{
                pathname: "/sellerInfo",
                productProps: {
                  productId: product._id,
                }}}

               className="sellerInfoButton">
                Seller Info
                <div class="buttonTextSpace" />
                <i class="fas fa-user"></i>
              </button>
              </Link>  
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductInfo;
