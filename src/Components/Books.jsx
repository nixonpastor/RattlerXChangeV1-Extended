import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function Books() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const books = [];

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
    if (product.productCategory === "Books") {
      books.push(product);
    }
    return books;
  });

  if (books.length === 0) {
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
  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Books" />
      <ul className="CardsContainer">
        {books.map((book) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={{
              pathname: "/productInfo",
              productProps: {
                productId: book._id,
              },
            }}
          >
            <Card
              text={book.productName}
              value={"$" + book.productPrice}
              img={book.productImage}
            />
          </Link>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Books;
