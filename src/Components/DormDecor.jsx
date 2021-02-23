import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";

function DormDecor() {
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Dorm Decor" />
      <ul className="CardsContainer">
        <CardRender text="Desk Lamp" value="$100" />
        <CardRender text="Flower Pot" value="$80" />
        <CardRender text="Curtains" value="$30" />
      </ul>
      <Footer />
    </div>
  );
}

export default DormDecor;
