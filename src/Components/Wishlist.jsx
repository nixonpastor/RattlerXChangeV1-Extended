/* eslint-disable react-hooks/exhaustive-deps */
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import WishlistCard from "./WishlistCard";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [userWishlist, setUserWishlist] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  var result1 = [];

  const { currentUser } = useAuth();
  const [newWishlist, setNewWishlist] = useState([]);

  useEffect(getWishlistProducts, [
    wishlist,
    products,
    newWishlist,
    userWishlist,
  ]); // eslint-disable-line react-hooks/exhaustive-deps
  function getWishlistProducts() {
    axios.get("http://localhost:5000/wishlists/").then((res) => {
      if (isLoading) {
        setWishlist(res.data);
        setLoading(false);
      }
    });

    console.log(wishlist);

    axios.get("http://localhost:5000/products/").then((res) => {
      if (isLoading3) {
        setProducts(res.data);
        setLoading3(false);
      }
    });

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
  }

  var filtered = false;
  function filterProducts() {
    var dataArr = userWishlist.map((item) => {
      return [JSON.stringify(item), item];
    }); // creates array of array
    var maparr = new Map(dataArr); // create key value pair from array of array

    result1 = [...maparr.values()]; //converting back to array from mapobject

    console.log("inside filtered");
    console.log(result1);

    return result1.map((product) => (
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
        <WishlistCard
          text={product.productName}
          value={"$" + product.productPrice}
          img={product.productImage}
          productId={product._id}
        />
      </Link>
    ));
  }

  return (
    <div className="pageContent">
      <navbar />
      <SearchAndSortRender Title="Wishlist" />
      <ul className="CardsContainer">
        {" "}
        {filtered ? true({}) : filterProducts()}
      </ul>
      <Footer />
    </div>
  );
}

export default Wishlist;
