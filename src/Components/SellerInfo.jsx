import Footer from "./Footer";
import "./SellerInfo.css";
import CardRender from "./CardRender";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SellerProfile(props) {


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
      <div>
        <h1 className="SellerProfileTitle"> Seller's Profile
        </h1>
      </div>
      <div className="SellerDetailContent">
        <div className="UserDetails">
          <div className="imageSellerInfo">
            <button className="SellerImage"> Image Goes Here </button>
          </div>

          <div className="SellerDetailProfile">
            <h3 className="SellerNameTitle"> {product.productName} </h3>
            <h3 className="SellerEmailTitle"> {product.productEmail} </h3>
            <h3 className="SellerNoOfProducts"> Seller's No. of Products </h3>
          </div>

          <div className="SellerButton">
            <Link to="/outlook">
              <button type="submit" className="contactSeller">
                Contact Seller
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="SellerInfoCards">
            {/*
            <CardRender text="St. Mary's Shirt" value="$80" />
            <CardRender text="iPhone 12" value="$800" />
            <CardRender text="macBook Pro 2020" value="$1200" />
            <CardRender text="Desk Lamp" value="$100" />
            */}
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SellerProfile;
