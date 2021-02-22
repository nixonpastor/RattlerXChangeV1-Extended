function Card(props) {
  return (
    <div>
      <figure label={props.value}>
        <img alt="product" src={props.src} />
      </figure>
      <div>
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}

export default Card;
