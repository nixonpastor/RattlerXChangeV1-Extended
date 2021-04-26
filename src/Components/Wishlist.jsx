/* eslint-disable react-hooks/exhaustive-deps */
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [userWishlist, setUserWishlist] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
  var result1 = [];

  const [result, setResult] = useState([]);

  const { currentUser } = useAuth();
  // var newWishlist = [];
  const [newWishlist, setNewWishlist] = useState([]);

  // var result = [];

  // useEffect(() => {
  //   getWishlistProducts();
  // }, []);
  useEffect(getWishlistProducts, [
    wishlist,
    products,
    newWishlist,
    userWishlist,
    result,
  ]); // eslint-disable-line react-hooks/exhaustive-deps
  function getWishlistProducts() {
    axios.get("http://localhost:5000/wishlists/").then((res) => {
      if (isLoading) {
        setWishlist(res.data);
        setLoading(false);
      }
    });

    console.log(wishlist);

    // // console.log(newWishlist);
    // setWishlist(newWishlist);
    axios.get("http://localhost:5000/products/").then((res) => {
      if (isLoading3) {
        setProducts(res.data);
        setLoading3(false);
      }
    });
    // console.log("Axios products");
    // console.log(products);
    console.log("this is first wishlist product");
    // console.log(wishlist[0].wishlistProduct);
    console.log("this is first products product");
    // console.log(products[0]._id);

    for (var i = 0; i < wishlist.length; i++) {
      if (wishlist[i].wishlistOwner === currentUser.email) {
        newWishlist.push(wishlist[i]);
      }
    }
    setNewWishlist(newWishlist);
    console.log("this is user wishlist");
    console.log(newWishlist);
    for (var j = 0; j < newWishlist.length; j++) {
      axios
        .get(
          "http://localhost:5000/products/" + newWishlist[j].wishlistProduct,
          { id: newWishlist[j].wishlistProduct }
        )
        .then((res) => {
          if (isLoading2) {
            userWishlist.push(res.data);
            setLoading2(true);
          }
        });
    }

    setUserWishlist(userWishlist);
    console.log(userWishlist);

    // var dataArr = userWishlist.map((item) => {
    //   return [JSON.stringify(item), item];
    // }); // creates array of array
    // var maparr = new Map(dataArr); // create key value pair from array of array

    // result1 = [...maparr.values()]; //converting back to array from mapobject

    // console.log(result1);
    // setResult(result1);
    // console.log(result);
    // setResult(result1);

    // setUserWishlist(result1);
    // if (isLoading4) {
    //   setProducts(result1);
    //   console.log("inside is loading4");
    //   setLoading4(false);
    // }

    // setProducts(result);

    // setResult(result1);

    // setWishlist(result);
    // if (isLoading3) {
    //   setProducts(result);
    //   setLoading3(false);
    // }

    // console.log("Products");
    // console.log(products);
    // setProducts(products);
    //  const unique = [...new Map(products.map(item => [item[key], item])).values()]
    // products.length = products.length / 2;
    // newWishlist.map((wishlistItem) => {
    //   axios
    //     .get(
    //       "http://localhost:5000/products/" + wishlistItem.wishlistProduct,
    //       { id: wishlistItem.wishlistProduct }
    //     )
    //     .then((res) => {
    //       products.push(res.data);
    //     });
    //   return products;
    // });
    // console.log(products);
  }

  // console.log(userWishlist);

  // function setProductFilter() {
  //   var dataArr = products.map((item) => {
  //     return [JSON.stringify(item), item];
  //   }); // creates array of array
  //   var maparr = new Map(dataArr); // create key value pair from array of array

  //   result = [...maparr.values()]; //converting back to array from mapobject

  //   console.log(result);
  // }

  // console.log(wishlist);
  // for (var i = 0; i < wishlist.length; i++) {
  //   if (wishlist[i].wishlistOwner === currentUser.email) {
  //     newWishlist.push(wishlist[i]);
  //   }
  // }
  // setNewWishlist(newWishlist);
  // console.log(newWishlist);
  // console.log("this is first wishlist product");
  // console.log(newWishlist[0].wishlistProduct);
  // console.log("this is first products product");
  // console.log(products[0]._id);
  // for (var j = 0; j < newWishlist.length; j++) {
  //   axios
  //     .get("http://localhost:5000/products/" + newWishlist[j].wishlistProduct, {
  //       id: newWishlist[j].wishlistProduct,
  //     })
  //     .then((res) => {
  //       // if (isLoading2) {
  //       userWishlist.push(res.data);
  //       // setLoading2(true);
  //       // }
  //     });
  // }

  // var dataArr = userWishlist.map((item) => {
  //   return [JSON.stringify(item), item];
  // }); // creates array of array
  // var maparr = new Map(dataArr); // create key value pair from array of array

  // result = [...maparr.values()]; //converting back to array from mapobject

  // console.log(result);
  // console.log(userWishlist);

  var filtered = false;
  function filterProducts() {
    var dataArr = userWishlist.map((item) => {
      return [JSON.stringify(item), item];
    }); // creates array of array
    var maparr = new Map(dataArr); // create key value pair from array of array

    result1 = [...maparr.values()]; //converting back to array from mapobject

    console.log("inside filtered");
    console.log(result1);
    // if (isLoading4) {
    //   setUserWishlist(result1);
    //   setLoading4(false);
    // }
    // console.log("this is userwishlist");
    // console.log(userWishlist);
    // filtered = true;
    return (
      // <ul className="CardsContainer">
      //   {" "}
      result1.map((product) => (
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to={{
            pathname: "/productInfo",
            productProps: {
              productId: product._id,
            },
          }}
        >
          <Card
            text={product.productName}
            value={"$" + product.productPrice}
            img={product.productImage}
          />
        </Link>
      ))
      // </ul>
    );
  }

  return (
    <div className="pageContent">
      <navbar />
      <SearchAndSortRender Title="Wishlist" />
      <ul className="CardsContainer">
        {" "}
        {/* {userWishlist.map((product) => */}
        {filtered
          ? true({
              /* <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={{
                    pathname: "/productInfo",
                    productProps: {
                      productId: product._id,
                    },
                  }}
                >
                  <Card
                    text={product.productName}
                    value={"$" + product.productPrice}
                    img={product.productImage}
                  />
                </Link> */
            })
          : filterProducts()}
      </ul>
      <Footer />
    </div>
  );
}

export default Wishlist;
