import Footer from "./Footer";
import "./EditProfile.css";
import "./Pages.css";

function EditProfile() {
  return (
    <div className="pageContent">
      <div className="editProfile" id="stylized">
        <form>
          <h2 id="heading">Edit Profile</h2>
          <div className="formLables">
            <label>
              First Name:
              <input
                type="text"
                name="Enter First name"
                placeholder="Enter First name"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="Enter Last name"
                placeholder="Enter Last name"
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="Enter Phone Number"
                placeholder="Enter Phone Number"
              />
            </label>
            <label>
              Email Address:
              <input
                type="text"
                name="Enter Email Address"
                placeholder="Enter Email Address"
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="Enter Address"
                placeholder="Enter Address"
              />
            </label>
          </div>
          <input type="submit" value="Update Profile" />
        </form>
        <form>
          <h2 id="heading">Change Password</h2>
          <div className="formLables">
            <label>
              New Password:
              <input
                type="text"
                name="Enter New Password"
                placeholder="Enter New Password"
              />
            </label>
            <label>
              Current Password:
              <input
                type="text"
                name="Enter Current Password"
                placeholder="Enter Current Password"
              />
            </label>
          </div>
          <input type="submit" value="Update Password" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
