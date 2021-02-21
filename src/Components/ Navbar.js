import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="LinkBox">
        <div className="RattlerLogo">
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="NavbarRightContainer">
          <div className="CategoryLinks">
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/dormdecor">Dorm Decor</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/apparel">Apparel</Link>
            </li>
          </div>
          <div className="NavIcons">
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
