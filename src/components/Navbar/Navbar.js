import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          {/* <Link exact to="/" className="nav-logo">
            CodeReact
            <i class="fab fa-react"></i>
          </Link> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link exact to="/" className="nav-links active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link exact to="/imgdata" className="nav-links active">
                Allcatimage
              </Link>
            </li>

            <li className="nav-item">
              <Link exact to="/hoverimg" className="nav-links active">
                Catnamehover
              </Link>
            </li>
            <li className="nav-item">
              <Link exact to="/dognamehover" className="nav-links active">
                Dognamehover
              </Link>
            </li>
            <li className="nav-item">
              <Link exact to="/alldogimg" className="nav-links active">
                Alldogimage
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className='{click ? "fas fa-items" : "fas fa-bars}'></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
