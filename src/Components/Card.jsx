import "./Card.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Card(props) {
  const { currentUser } = useAuth();

  function addToWishlist() {
    console.log("This is the product");
    console.log(props);
    const wishlist = {
      wishlistProduct: props.productId,
      wishlistOwner: currentUser.email.toLowerCase(),
    };

    console.log("This is the wishlist item");
    console.log(wishlist);
    axios
      .post("http://localhost:5000/wishlists/addWishlistItem", wishlist)
      .then((res) => console.log(res.data));

    window.alert("Item Added to Wishlist.");
  }
  return (
    <li className="CardContainer">
      <figure className="PriceLabel" data-category={props.value}>
        <img className="image" alt="product" src={"images/" + props.img} />
      </figure>
      <div className="productTitle">
        <h1>{props.text}</h1>
      </div>
      <div className="cardIcons">
        <Link className="iconWishlist" onClick={addToWishlist}>
          <i className="fas fa-heart"></i>
        </Link>
        <Link to="/outlook" className="iconEnvelop">
          <i class="fas fa-envelope"></i>
        </Link>
      </div>
    </li>
  );
}

export default Card;
