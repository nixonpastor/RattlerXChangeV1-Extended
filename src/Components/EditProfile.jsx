import Footer from "./Footer";
import "./EditProfile.css";
import "./Pages.css";
// import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
// import { Alert } from "react-bootstrap";
// import { useState, useRef } from "react";

/*Pragyan Added*/
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
// import { useHistory } from "react-router-dom";
// import { Alert } from "react-bootstrap";
import axios from "axios";

function EditProfile(props) {
  // ALL OF THIS COMMENT CODE WILL BE IMPLEMENTED LATER
  // const { currentUser, updatePassword, reauthenticate } = useAuth();
  // const [error, setError] = useState("");
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const newPasswordRef = useRef();
  // const passwordCurrentRef = useRef();
  // const history = useHistory();

  // async function handleSubmit(e) {
  //   e.preventDefault();
  // if (currentUser.password !== passwordCurrentRef.current.value) {
  //   return setError("Invalid Current Password");
  // }
  // if (passwordRef.current.value !== passwordCurrentRef.current.value) {
  //   return setError("Passwords do not match");
  // }
  //  reauthenticate(passwordCurrentRef.current.value)
  //     .then(() => {
  //       updatePassword(newPasswordRef.current.value)
  //         .then(() => {
  //           setMessage("Updated Password");
  //           history.push("/editprofile");
  //         })
  //         .catch((error) => {
  //           setError("Problem reseting your password");
  //         });
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });

  // const promises = [];
  // setLoading(true);
  // setError("");
  // if (newPasswordRef.current.value) {
  //   promises.push(updatePassword(newPasswordRef.current.value));
  // }

  // Promise.all(promises)
  //   .then(() => {
  //     history.push("/profile");
  //   })
  //   .catch(() => {
  //     setError("Failed to update password");
  //   })
  //   .finally(() => setLoading(false));
  // }

  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [profileImage, setProfileImage] = useState("defaultProfilePicture.png");
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    function getUsers() {
      axios.get("http://localhost:5000/users/").then((res) => {
        if (isLoading) {
          setUsers(res.data);
          console.log(users);
          setLoading(false);
        }
      });

      users.map((user) => {
        if (user.email === props.location.userProps.userEmail) {
          setUser(user);
        }
        return user;
      });
    }
    getUsers();
  }, [users, isLoading, user, props.location.userProps.userEmail]);

  function handleSubmit(e) {
    //prevents default html form actions and allows us to customize our own
    e.preventDefault();

    //setting product object to pass as a parameter for post request
    const updatedUser = new FormData();
    updatedUser.append("photo", profileImage);
    updatedUser.append("id", user._id);
    updatedUser.append("profileFirstName", user.firstName);
    updatedUser.append("profileLastName", user.lastName);
    updatedUser.append("profilePhoneNumber", user.phoneNumber);
    updatedUser.append("profileEmail", currentUser.email);

    console.log(Object.fromEntries(updatedUser));

    //making a POST request to this url with the product the user wants to add
    axios
      .post("http://localhost:5000/users/update/" + user._id, updatedUser)
      .then((res) => console.log(res.data));

    // history.push("/");

    //resets the form back to empty
    // e.target.reset();

    //sets the variables back to default if a user wants to add another product
    // setProductName("");
    // setProductDescription("");
    // setProductPrice(null);
    // setProductCondition("");
    // setProductCategory("");
    // setProductImage("");
  }

  function onChangeProfileImage(e) {
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
  }

  return (
    <div className="pageContent">
      <div className="editProfile" id="stylized">
        <form className="userProfileDetail" onSubmit={handleSubmit}>
          <h2 id="headingEditProfile">Edit Profile</h2>
          <div className="userProfileLables">
            <label>
              First Name:
              <input
                type="text"
                name="profileFirstName"
                value={user.firstName}
                className="EditProfileInput"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="profileLastName"
                value={user.lastName}
                className="EditProfileInput"
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="profilePhoneNumber"
                value={user.phoneNumber}
                className="EditProfileInput"
              />
            </label>
            {/* COMMENTED BECAUSE WE CANNOT LET THE USER CHANGE OUTLOOK EMAIL */}
            {/* <label>
              Email Address:
              <input
                type="text"
                name="Enter Email Address"
                placeholder="Enter Email Address"
                className="EditProfileInput"
              />
            </label> */}
            {/* <label>
              Address:
              <input
                type="text"
                name="Enter Address"
                placeholder={currentUser.email}
                className="EditProfileInput"
              />
            </label> */}
            <label className="productDescription">
              Add Profile Picture
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="addProductInput"
                onChange={onChangeProfileImage}
              />
            </label>
          </div>
          <button type="submit" className="updateProfileButton">
            Update Profile{" "}
          </button>
        </form>
        <form className="userProfilePasswordDetail">
          <h2 id="headingEditProfile">Change Password</h2>
          <div className="formProfileLables">
            <label>
              New Password:
              <input
                type="text"
                name="Enter New Password"
                placeholder="Enter New Password"
                className="EditProfileInput"
              />
            </label>
            <label>
              Current Password:
              <input
                type="text"
                name="Enter Current Password"
                placeholder="Enter Current Password"
                className="EditProfileInput"
              />
            </label>
          </div>
          <button type="submit" className="updatePasswordButton">
            Update Password{" "}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
