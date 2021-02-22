import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";

function Books() {
  return (
    <div>
      <SearchAndSortRender Title="Books" />
      <ul className="CardsContainer">
        <CardRender text="Programming I" value="$200" />
        <CardRender text="Calculus I" value="$150" />
        <CardRender text="Chemistry I" value="$200" />

      </ul>
    </div>
  );
}

export default Books;
