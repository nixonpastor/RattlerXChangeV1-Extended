import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";

function Electronics() {
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Electronics" />
      <ul className="CardsContainer">
        <CardRender text="iPhone 12" value="$800" />
        <CardRender text="macBook Pro 2020" value="$1200" />
        <CardRender text="Toshiba Smart TV" value="$900" />
      </ul>
      <Footer />
    </div>
  );
}

export default Electronics;
