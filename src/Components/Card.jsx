import "./Card.css";

function Card(props) {
  return (
    <li className="CardContainer">
      <figure className="PriceLabel" data-category={props.value}>
        <img className="image" alt="product" src={props.src} />
      </figure>
      <div className="productTitle">
        <h1>{props.text}</h1>
      </div>
    </li>
  );
}

export default Card;
