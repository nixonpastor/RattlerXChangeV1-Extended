import Footer from "./Footer";
import "./EditProfile.css";
import "./Pages.css";
// import { useAuth } from "../contexts/AuthContext";
// import { useHistory } from "react-router-dom";
// import { Alert } from "react-bootstrap";
// import { useState, useRef } from "react";

function EditProfile() {
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

  return (
    <div className="pageContent">
      <div className="editProfile" id="stylized">
        <form className="userProfileDetail">
          <h2 id="headingEditProfile">Edit Profile</h2>
          <div className="userProfileLables">
            <label>
              First Name:
              <input
                type="text"
                name="Enter First name"
                placeholder="Enter First name"
                className="EditProfileInput"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="Enter Last name"
                placeholder="Enter Last name"
                className="EditProfileInput"
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="Enter Phone Number"
                placeholder="Enter Phone Number"
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
            <label>
              Address:
              <input
                type="text"
                name="Enter Address"
                placeholder="Enter Address"
                className="EditProfileInput"
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
