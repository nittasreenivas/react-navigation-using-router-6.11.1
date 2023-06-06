import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/aboutus"> AboutUs </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
        <li>
          <Link to="/signin"> Signin </Link>
        </li>
      </ul>
    </div>
  );
}
