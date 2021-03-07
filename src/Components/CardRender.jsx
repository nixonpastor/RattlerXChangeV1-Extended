import Card from "./Card";

function CardRender(props) {
  return <Card src="Rattler.jpeg" text={props.text} value={props.value} />;
}

export default CardRender;
