import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Profile.css"

function Profile(props) {
  return (
    <div className = "ProfilePage">
      <h1>Welcome to Profile Page</h1>
      <div className = "userInfo">
        <div className = "ProfileTag">
          <b className = "tag">
            My Profile
          </b>
        </div>
        <img className = "image" alt = "profile pic" src="logo192.png" text={props.text} value={props.value} />
      
        {/* Would like to link to file browser */}
        <li className = "profilePic">Change Picture</li>
      
        <div className = "Name">Full Name</div>
      
        {/* Used link here just in case we want to have this take
          the person straight to Outlook */}
        <li className = "Email">Email</li>
        <div className = "productsListed">No. of Products Listed</div>
      </div>
      <li className = "link">
          <Link to = "/editProfile" className = "links">
            Edit Profile
          </Link>
      </li>
      <li className = "link">
          <Link to = "/addProduct" className = "links">
            Add a Product
          </Link>
      </li>
      <li className = "link">
          <Link to = "/signIn" className = "links">
            Log Out
          </Link>
      </li>
      <Footer/>
    </div>
  );
}

export default Profile;
