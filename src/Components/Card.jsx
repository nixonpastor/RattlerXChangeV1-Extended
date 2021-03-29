import "./Card.css";

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <li className="CardContainer">
      <figure className="PriceLabel" data-category={props.value}>
        <img className="image" alt="product" src="./Rattler.jpeg" />
      </figure>
      <div className="productTitle">
        <h1>{props.text}</h1>
      </div>
      <div className="cardIcons">
        <Link to="/wishlist" className="iconWishlist">
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
