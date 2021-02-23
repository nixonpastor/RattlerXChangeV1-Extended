import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
function Books() {
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Books" />
      <ul className="CardsContainer">
        <CardRender text="Programming I" value="$200" />
        <CardRender text="Calculus I" value="$150" />
        <CardRender text="Chemistry I" value="$200" />
      </ul>
      <Footer />
    </div>
  );
}

export default Books;
