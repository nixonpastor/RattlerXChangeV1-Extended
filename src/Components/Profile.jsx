import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Profile.css";
import "./Pages.css";
import React from "react"

function Profile(props) {

  
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="pageContent">
      <h1 className="title">Welcome to Profile Page</h1>
      <div className="userInfo">
        <div className="ProfileTag">
          <b className="tag">My Profile</b>
        </div>
        <img
          className="image"
          alt="profile pic"
          src="logo192.png"
          text={props.text}
          value={props.value}
        />

        {/* Would like to link to file browser */}
        <div
          style={{
          //display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
          }}
    >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
        style={{
          display: "none"
          }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute"
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
      </div>
      <li className="link">
        <Link to="/editProfile" className="links">
          Edit Profile
        </Link>
      </li>
      <li className="link">
        <Link to="/addProduct" className="links">
          Add a Product
        </Link>
      </li>
      <li className="link">
        <Link to="/signIn" className="links">
          Log Out
        </Link>
      </li>
      <Footer />
    </div>
  );
}

export default Profile;
