import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Profile.css";
import "./Pages.css";
import ProfileProductCardRender from "./ProfileProductCardRender";
import React, { useState, useReducer } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ProfileProductCard from "./ProfileProductCard";

import { useEffect } from "react";
import axios from "axios";

function Profile(props) {
  // const uploadedImage = React.useRef(null);
  // const imageUploader = React.useRef(null);
  const history = useHistory();
  //getting the logged in user
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  //user products only
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    function getProducts() {
      axios.get("http://localhost:5000/products/").then((res) => {
        if (isLoading) {
          setProducts(res.data);
          console.log(products);
          setLoading(false);
        }
      });
      axios.get("http://localhost:5000/users/").then((res) => {
        if (isLoading2) {
          setUsers(res.data);
          console.log(users);
          setLoading2(false);
        }
      });
      users.map((user) => {
        if (user.email === currentUser.email) {
          setUser(user);
        }
        return user;
      });
      console.log(user);
    }
    getProducts();
  }, [products, isLoading, isLoading2, users, currentUser.email, user]);

  /*
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  */
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="pageContent">
      <h1 className="title"> Welcome </h1>
      <div className="rowUserProfileProducts">
        <div className="userInfo">
          <div className="ProfileTag">
            <b className="tag">My Profile</b>
          </div>

          {/*   
           Would like to link to file browser      
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: "none",
              }}
            />
            <div
              style={{
                height: "60px",
                width: "60px",
                border: "1px dashed black",
                alignContent: "center",
              }}
              onClick={() => imageUploader.current.click()}
            >
              <img
                ref={uploadedImage}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "acsolute",
                }}
              />
            </div>
            Click to Upload an Image
          </div>
          */}

          <div className="userImageDiv">
            <img
              className="userImageContainer"
              alt="Profile"
              src={"userProfile/" + user.profileImage}
            />
          </div>

          {/* <div className="uploadImageDiv">
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="userImageUploader"
                //onChange={onChangeProductImage}
              />
          </div> */}

          <div className="Name">Full Name</div>

          {/* Used link here just in case we want to have this take
          the person straight to Outlook */}

          <li className="Email">Email: {currentUser.email}</li>
          <div className="productsListed">No. of Products Listed</div>
          <div className="hyper">
            <li className="link">
              <Link
                className="profilelink"
                to={{
                  pathname: "/editProfile",
                  userProps: {
                    userEmail: currentUser.email,
                  },
                }}
              >
                Edit Profile
              </Link>
            </li>
            <li className="link">
              <Link to="/addProduct" className="profilelink">
                Add a Product
              </Link>
            </li>
            <li className="link">
              <Link to="/login" onClick={handleLogout} className="profilelink">
                Log Out
              </Link>
              {error && <Alert variant="danger">{error}</Alert>}
            </li>
          </div>
        </div>

        <div className="cards">
          <ul className="ProfileCardsContainer">
            {products.map((product) =>
              product.productEmail === currentUser.email ? (
                <ProfileProductCard
                  text={product.productName}
                  value={"$" + product.productPrice}
                  img={product.productImage}
                />
              ) : null
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
