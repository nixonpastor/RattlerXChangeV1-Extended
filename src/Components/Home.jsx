import CardRender from "./CardRender";
import "./Card.css";
function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <ul className="CardsContainer">
        <CardRender />
        <CardRender />
        <CardRender />
        <CardRender />
        <CardRender />
        <CardRender />
        <CardRender />
      </ul>
    </div>
  );
}

export default Home;
