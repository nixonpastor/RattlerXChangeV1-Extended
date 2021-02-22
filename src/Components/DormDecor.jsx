import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";

function DormDecor() {
  return (
    <div>
      <SearchAndSortRender Title="Dorm Decor" />
      <ul className="CardsContainer">
        <CardRender text="Desk Lamp" value="$100" />
        <CardRender text="Flower Pot" value="$80" />
        <CardRender text="Curtains" value="$30" />

      </ul>
    </div>
  );
}

export default DormDecor;
