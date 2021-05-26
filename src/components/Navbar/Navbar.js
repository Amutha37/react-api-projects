import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <container>
      <nav className="navbar">
        <div className="nav-container">
          {/* <Link exact to="/" className="nav-logo">
            CodeReact
            <i class="fab fa-react"></i>
          </Link> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link exact to="/" activeClassName="active" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/imgdata"
                activeClassName="active"
                className="nav-Links"
              >
                Imagedata
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/hoverimg"
                activeClassName="active"
                className="nav-Links"
              >
                Hoverimage
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className='{click ? "fas fa-items" : "fas fa-bars}'></i>
          </div>
        </div>
      </nav>
    </container>
  );
};

export default Navbar;
