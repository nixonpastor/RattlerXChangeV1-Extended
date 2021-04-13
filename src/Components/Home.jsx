import "./Card.css";
import SearchAndSort from "./SearchAndSort";
import Footer from "./Footer";
import "./Pages.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./SearchAndSort.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const filteredProducts = [];

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

  function onChangeFilter(e) {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

  // products.map((product) => {
  //   if (filter === "") {
  //     setProducts(products);
  //   }
  //   if (product.productCategory === filter) {
  //     filteredProducts.push(product);
  //   }

  //   setProducts(filteredProducts);
  //   console.log(products);
  //   return products;
  // });

  return (
    <div className="pageContent">
      <SearchAndSort Title="Main Menu" />
      <div className="sortAndSearch">
        <select className="SortButtonDropDown" onChange={onChangeFilter}>
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <ul className="CardsContainer">
        {products.map((product) => (
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
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Home;
