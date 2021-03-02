import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import navbar from "./Navbar.css";

function Wishlist() {
  return (
    <div className="pageContent">
      <navbar />
      <SearchAndSortRender Title="Wishlist" />
      <ul className="CardsContainer"> {/* select favorites */}
        <CardRender text="St. Mary's Shirt" value="$80" />
        <CardRender text="iPhone 12" value="$800" />
        <CardRender text="Desk Lamp" value="$100" />
        <CardRender text="Curtains" value="$30" />
        <CardRender text="Calculus I" value="$150" />
      </ul>
      <Footer />
    </div>
  )
}

export default Wishlist;
