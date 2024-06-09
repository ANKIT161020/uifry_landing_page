import logo from "../../assets/uifry_logo.png";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <nav className="navbar_div">
        <div className="logo_container">
          <a href="#Home">
            <img src={logo} alt="Uifry" />
            <span>uifry</span>
          </a>
        </div>
        <div className={`nav_items ${isOpen ? "show_menu" : ""}`}>
          <ul className="nav_list">
            <li>
              <a
                href="#Home"
                className={activePage === "Home" ? "active" : ""}
                onClick={() => handleSetActivePage("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Features"
                className={activePage === "Features" ? "active" : ""}
                onClick={() => handleSetActivePage("Features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#Pricing"
                className={activePage === "Pricing" ? "active" : ""}
                onClick={() => handleSetActivePage("Pricing")}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#Aboutus"
                className={activePage === "Aboutus" ? "active" : ""}
                onClick={() => handleSetActivePage("Aboutus")}
              >
                About Us
              </a>
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
