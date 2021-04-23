import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function DormDecor() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const dormDecor = [];

  const [filter, setFilter] = useState("");
  const [searchFilter, setTermFilter] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const usedProducts = [];
  const newProducts = [];
  const searchProducts = [];

  useEffect(() => {
    function getProducts() {
      axios.get("http://localhost:5000/products/").then((res) => {
        if (isLoading) {
          setProducts(res.data);
          console.log(products);
          setLoading(false);
        }
      });
    }
    getProducts();
  }, [products, isLoading]);

  products.map((product) => {
    if (product.productCategory === "DormDecor") {
      dormDecor.push(product);
    }
    return dormDecor;
  });

  if (dormDecor.length === 0) {
    return (
      <div className="pageContent">
        <SearchAndSortRender Title="Dorm Decor" />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          No Dorm Decor Available
        </h1>
        <Footer />
      </div>
    );
  }

  function onChangeFilter(e) {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

  function filterProducts() {
    allProducts.map((product) => {
      if (filter === "") {
        setProducts(allProducts);
      } else if (product.productCondition === filter && filter === "Used") {
        usedProducts.push(product);
        setProducts(usedProducts);
      } else if (product.productCondition === filter && filter === "New") {
        newProducts.push(product);
        setProducts(newProducts);
      }

      return products;
    });
    console.log("New filtered products are: ");
    console.log(products);
  }

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

  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Dorm Decor" />

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
          placeholder="What are you looking for?"
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
          product.productCategory === "DormDecor" ? (
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
              />
            </Link>
          ) : null
        )}
      </ul>
      <Footer />
    </div>
  );
}

export default DormDecor;
