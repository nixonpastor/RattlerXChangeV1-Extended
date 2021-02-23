import Card from "./Card";

function CardRender(props) {
  return <Card src="logo192.png" text={props.text} value={props.value} />;
}

export default CardRender;
