import "./ProfileProductCard.css";

import { Link } from "react-router-dom";

function ProfileProductCard(props) {

  console.log(props)

  return (
    <li className="CardContainer">
      <figure className="PriceLabel" data-category={props.value}>
        <img className="image" alt="product" src={"images/" + props.img} />
      </figure>
      <div className="productTitle">
        <h1>{props.text}</h1>
      </div>
      <div className="cardIcons">
        <Link to={{
          pathname: "/editProduct",
          productProps: {
            productID: props.prodId,
          },
        }}
          className="iconEditProduct">
          <i class="fas fa-pencil-alt"></i>
        </Link>
        <Link to="/outlook" className="iconTrashCan">
          <i class="fas fa-trash-alt"></i>
        </Link>
      </div>
    </li>
  );
}

export default ProfileProductCard;
