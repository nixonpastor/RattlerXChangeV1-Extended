import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Profile.css";
import "./Pages.css";
import ProfileProductCardRender from "./ProfileProductCardRender";
import React from "react";

function Profile(props) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

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

  return (
    <div className="pageContent">
      <h1 className="title">Welcome</h1>
      <div className="rowUserProfileProducts">
        <div className="userInfo">
          <div className="ProfileTag">
            <b className="tag">My Profile</b>
          </div>

          {/* Would like to link to file browser */}
          <div
            style={{
              display: flex,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px"
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
                alignContent: "center"
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

          <div className="Name">Full Name</div>

          {/* Used link here just in case we want to have this take
          the person straight to Outlook */}

          <li className="Email">Email</li>
          <div className="productsListed">No. of Products Listed</div>
          <div className="hyper">
            <li className="link">
              <Link to="/editProfile" className="profilelink">
                Edit Profile
              </Link>
            </li>
            <li className="link">
              <Link to="/addProduct" className="profilelink">
                Add a Product
              </Link>
            </li>
            <li className="link">
              <Link to="/signIn" className="profilelink">
                Log Out
              </Link>
            </li>
          </div>
        </div>

        <div className="cards">
          <ProfileProductCardRender text="New Product" value="$100" />
          <ProfileProductCardRender text="New Product2" value="$200" />
          <ProfileProductCardRender text="New Product3" value="$300" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
