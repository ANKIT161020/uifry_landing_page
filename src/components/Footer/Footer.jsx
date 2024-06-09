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
              <img src={logo} alt="Uifry" />
              <span>uifry</span>
            </div>
            <div className="f_help">
              <img src={help} alt="Uifry" />
              <span>Help@Frybix.Com</span>
            </div>
            <div className="f_help">
              <img src={call} alt="Uifry" />
              <span>+1234 456 678 89</span>
            </div>
          </div>
          <div className="footer-links">
            <h2>Links</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-legal">
            <h2>Legal</h2>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-product">
            <h2>Product</h2>
            <ul>
              <li>Take Tour</li>
              <li>Live Chat</li>
              <li>Reviews</li>
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
