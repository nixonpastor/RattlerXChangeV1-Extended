import CardRender from "./CardRender";
import "./Card.css";
function Home() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Welcome to Main Menu
      </h1>
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
