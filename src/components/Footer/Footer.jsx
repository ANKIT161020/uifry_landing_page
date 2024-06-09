import logo from "../../assets/uifry_logo.png";
import help from "../../assets/help.png";
import call from "../../assets/call.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="logo">
              <a href="#Home">
                <img src={logo} alt="Uifry" />
                <span>uifry</span>
              </a>
            </div>
            <div className="f_help">
              <img src={help} alt="Uifry" />
              <a href="mailto:Help@Frybix.Com?body=Ask your Query">
                <span>Help@Frybix.Com</span>
              </a>
            </div>
            <div className="f_help">
              <img src={call} alt="Uifry" />
              <a href="tel:+1234 456 678 89">
                <span>+1234 456 678 89</span>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Aboutus">About Us</a>
              </li>
              <li>
                <a href="#Bookings">Bookings</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-legal">
            <h2>Legal</h2>
            <ul>
              <li>
                {" "}
                <a href="#Terms">Terms Of Use</a>
              </li>
              <li>
                <a href="#Privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#Cookie">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-product">
            <h2>Product</h2>
            <ul>
              <li>
                <a href="#Tour">Take Tour</a>
              </li>
              <li>
                <a href="#Chat">Live Chat</a>
              </li>
              <li>
                <a href="#Reviews">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Stay Up To Date</p>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
