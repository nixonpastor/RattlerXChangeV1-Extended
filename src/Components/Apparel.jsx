import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";

function Apparel() {
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Apparel" />
      <ul className="CardsContainer">
        <CardRender text="St. Mary's Shirt" value="$80" />
        <CardRender text="St. Mary's Hat" value="$30" />
        <CardRender text="Nike Hoodie" value="$80" />
      </ul>
      <Footer />
    </div>
  );
}

export default Apparel;
