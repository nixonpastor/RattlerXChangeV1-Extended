import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function Books() {
  //set state variable for products and books
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchFilter, setTermFilter] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  var usedProducts = [];
  var newProducts = [];
  var searchProducts = [];

  useEffect(() => {
    function getProducts() {
      //get request to get ALL products
      axios.get("http://localhost:5000/products/").then((res) => {
        if (isLoading) {
          setProducts(res.data);
          setAllProducts(res.data);
          console.log(products);
          setLoading(false);
        }
      });
    }
    getProducts();
  }, [products, isLoading]);

  //return message if no books available
  if (books.length === 0 && products.length === 0) {
    return (
      <div className="pageContent">
        <SearchAndSortRender Title="Books" />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          No Books Available
        </h1>
        <Footer />
      </div>
    );
  }

  function onChangeFilter(e) {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

  //filter products to only display books
  function filterProducts() {
    products.map((product) => {
      if (product.productCategory === "Books") {
        books.push(product);
      }
      return books;
    });

    setBooks(books);
    books.map((product) => {
      if (filter === "") {
        setProducts(allProducts);
      } else if (product.productCondition === filter && filter === "Used") {
        usedProducts.push(product);
        setProducts(usedProducts);
        usedProducts = [];
      } else if (product.productCondition === filter && filter === "New") {
        newProducts.push(product);
        setProducts(newProducts);
        newProducts = [];
      }

      return products;
    });
    console.log("New filtered products are: ");
    console.log(products);
  }

  //filter search functionality on input and books
  function filterProductsbySearch() {
    allProducts.map((product) => {
      var productName = product.productName.toLowerCase();
      if (
        productName.includes(searchFilter.toLowerCase()) ||
        product.productDescription
          .toLowerCase()
          .includes(searchFilter.toLowerCase())
      ) {
        searchProducts.push(product);
        setProducts(searchProducts);
      }
      return products;
    });
  }

  function setSearchFilter(e) {
    setTermFilter(e.target.value);
  }

  //return HTML render of books page
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Books" />

      <div className="sortAndSearch">
        <select className="SortButtonDropDown" onChange={onChangeFilter}>
          <option value="">No Filter</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
        <button type="submit" className="filterButton" onClick={filterProducts}>
          <i class="fa fa-filter"></i>
        </button>
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for? Enter product name or description ..."
          onChange={setSearchFilter}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={filterProductsbySearch}
        >
          <i class="fa fa-search"></i>
        </button>
      </div>

      <ul className="CardsContainer">
        {products.map((product) =>
          product.productCategory === "Books" ||
          product.productCategory === "books" ? (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={{
                pathname: "/productInfo",
                productProps: {
                  productId: product._id,
                },
              }}
            >
              <Card
                text={product.productName}
                value={"$" + product.productPrice}
                img={product.productImage}
                productId={product._id}
              />
            </Link>
          ) : null
        )}
      </ul>
      <Footer />
    </div>
  );
}

export default Books;
