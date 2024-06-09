import logo from "../../assets/uifry_logo.png";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <nav className="navbar_div">
        <div className="logo_container">
          <img src={logo} alt="Uifry" />
          <span>uifry</span>
        </div>
        <div className={`nav_items ${isOpen ? "show_menu" : ""}`}>
          <ul className="nav_list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>

          <div className="close_nav">
            <i className="fa-solid fa-xmark" onClick={toggleMenu}></i>
          </div>
        </div>

        <div className="nav_toggle">
          <div className="down_btn">Download</div>
          <i
            id="nav_toggle_btn"
            className="fa-solid fa-bars"
            onClick={toggleMenu}
          ></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
