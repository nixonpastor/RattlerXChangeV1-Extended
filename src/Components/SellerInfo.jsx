import Footer from "./Footer";
import "./SellerInfo.css";
import CardRender from "./CardRender";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SellerProfile(props) {
  // setting a default user.
  const [users, setUsers] = useState([]);
  const [isSecondLoading, setSecondLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    function getProducts() {
      //getting the products from the database (mongo)
      axios.get("http://localhost:5000/products/").then((res) => {
        if (isLoading) {
          setProduct(res.data);
          console.log(products);
          setLoading(false);
        }
      });

      //getting the users from the database (mongo)
      axios.get("http://localhost:5000/users/").then((res) => {
        if (isSecondLoading) {
          setUsers(res.data);
          console.log(users);
          setSecondLoading(false);
        }
      });

      users.map((user) => {
        if (user.email === props.location.productProps.productEmail) {
          setUser(user);
        }
        return user;
      });
      console.log(user);
    }
    getProducts();
  }, [
    products,
    users,
    isLoading,
    isSecondLoading,
    user,
    props.location.productProps.productEmail,
  ]);

  console.log("Check");
  console.log(users);
  console.log(products);
  console.log(props.location.productProps.productEmail);

  return (
    <div className="pageContent">
      <div>
        <h1 className="SellerProfileTitle"> Seller's Profile</h1>
      </div>
      <div className="SellerDetailContent">
        <div className="UserDetails">
          <div className="imageSellerInfo">
            <img
              className="userImageContainer"
              alt="Profile"
              src={"userProfile/" + user.profileImage}
            />
          </div>

          <div className="SellerDetailProfile">
            <h3 className="SellerNameTitle">
              {" "}
              {user.firstName} {user.lastName}{" "}
            </h3>
            <h3 className="SellerEmailTitle">
              {" "}
              {props.location.productProps.productEmail}{" "}
            </h3>
          </div>

          <div className="SellerButton">
            <Link to="/outlook">
              <button type="submit" className="contactSeller">
                Contact Seller
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="SellerInfoCards">
            <ul className="ProfileCardsContainer">
              {products.map((product) =>
                product.productEmail ===
                props.location.productProps.productEmail ? (
                  <Card
                    text={product.productName}
                    value={"$" + product.productPrice}
                    img={product.productImage}
                    prodId={product._id}
                  />
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SellerProfile;
