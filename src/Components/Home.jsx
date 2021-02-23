import CardRender from "./CardRender";
import "./Card.css";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";

function Home() {
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Main Menu" />
      <ul className="CardsContainer">
        <CardRender text="St. Mary's Shirt" value="$80" />
        <CardRender text="iPhone 12" value="$800" />
        <CardRender text="macBook Pro 2020" value="$1200" />
        <CardRender text="Desk Lamp" value="$100" />
        <CardRender text="Curtains" value="$30" />
        <CardRender text="Nike Hoodie" value="$80" />
        <CardRender text="Calculus I" value="$150" />
      </ul>
      <Footer />
    </div>
  );
}

export default Home;
