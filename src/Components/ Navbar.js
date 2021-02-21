import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <div>
        <ul>
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
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
