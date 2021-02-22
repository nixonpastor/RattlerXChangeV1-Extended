import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";

function Apparel() {
  return (
    <div>
      <SearchAndSortRender Title="Apparel" />
      <ul className="CardsContainer">
        <CardRender text="St. Mary's Shirt" value="$80" />
        <CardRender text="St. Mary's Hat" value="$30" />
        <CardRender text="Nike Hoodie" value="$80" />

      </ul>
    </div>
  );
}

export default Apparel;
