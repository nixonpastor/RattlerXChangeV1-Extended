import CardRender from "./CardRender";
import SearchAndSortRender from "./SearchAndSortRender";
import Footer from "./Footer";
import "./Pages.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function Electronics() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

  return (
    <div className="pageContent">
      <SearchAndSortRender Title="Electronics" />
      <ul className="CardsContainer">
        {products.map((product) =>
          product.productCategory === "Electronics" ? (
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

export default Electronics;
