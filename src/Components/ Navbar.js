import { Link } from "react-router-dom";
import "./Navbar.css";

//Returns HTML version to render Navbar component
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="LinkBox">
        <div className="RattlerLogo">
          <li className="RattlerBox">
            <Link to="/" className="RattlerLink">
              {/* Rattler XChange */}
              <img
                src="RattlerXChangeLogo.png"
                alt="Rattler XChange Logo"
                className="RattlerLogoImg"
              />
            </Link>
          </li>
        </div>
        <div className="NavbarRightContainer">
          <div className="CategoryLinks">
            <li className="link">
              <Link to="/electronics" className="links">
                Electronics
              </Link>
            </li>
            <li className="link">
              <Link to="/dormdecor" className="links">
                Decor
              </Link>
            </li>
            <li className="link">
              <Link to="/books" className="links">
                Books
              </Link>
            </li>
            <li className="link">
              <Link to="/apparel" className="links">
                Apparel
              </Link>
            </li>
          </div>
          <div className="NavIcons">
            <li className="link">
              <Link to="/wishlist" className="icon">
                <i className="fas fa-heart"></i>
              </Link>
            </li>
            <li className="link">
              <Link to="/profile" className="icon">
                <i class="fas fa-user-circle"></i>
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
