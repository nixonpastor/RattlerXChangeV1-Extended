import "./SearchAndSort.css";

function SearchAndSort(props) {
  //returns heading for categories
  return (
    <li>
      <div className="screenTitle">
        <h1> {props.Title} </h1>
      </div>
    </li>
  );
}

export default SearchAndSort;
