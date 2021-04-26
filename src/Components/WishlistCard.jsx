import "./Card.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function WishlistCard(props) {
  const { currentUser } = useAuth();

  function deleteButtonPressed() {
    axios.get("http://localhost:5000/wishlists/").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (
          res.data[i].wishlistProduct === props.productId &&
          res.data[i].wishlistOwner === currentUser.email
        ) {
          axios
            .delete("http://localhost:5000/wishlists/" + res.data[i]._id, {
              id: res.data[i]._id,
            })
            .then((res) => console.log(res.data));
          window.alert("Item Deleted from your Wishlist.");
          window.location.reload();
        }
      }
    });
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
        <Link
          className="iconTrashCan"
          style={{ marginLeft: "0px" }}
          onClick={deleteButtonPressed}
        >
          <i class="fas fa-trash-alt"></i>
        </Link>
      </div>
    </li>
  );
}

export default WishlistCard;
