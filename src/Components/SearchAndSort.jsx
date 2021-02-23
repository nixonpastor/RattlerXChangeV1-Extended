import "./SearchAndSort.css"

function SearchAndSort(props) {
    return (

        <li>
            <div className="screenTitle">
                <h1> {props.Title} </h1>
            </div>

            <div className="sortAndSearch">
                <input type="text" className="searchTerm"
                    placeholder="What are you looking for?"
                />
                <button type="submit" className="submitButton"><i class="fa fa-search"></i></button>
            </div>
        </li>
    );
}

export default SearchAndSort;