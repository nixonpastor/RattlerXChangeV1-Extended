import Footer from "./Footer";
import "./EditProfile.css";
import "./Pages.css";

function EditProfile() {
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
            <label>
              Email Address:
              <input
                type="text"
                name="Enter Email Address"
                placeholder="Enter Email Address"
                className="EditProfileInput"
              />
            </label>
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
            Update Profile </button>
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
            Update Password </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
