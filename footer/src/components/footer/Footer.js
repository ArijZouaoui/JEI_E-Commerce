import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <ul className="footer-list">
        <li className="footer-list-title">INFORMATION</li>
        <li className="footer-list-option">About Us</li>
        <li className="footer-list-option">Delivery Information</li>
        <li className="footer-list-option">Privacy Policy</li>
        <li className="footer-list-option">Terms & Conditions</li>
      </ul>
      <ul className="footer-list">
        <li className="footer-list-title">CUSTOMER SERVICE</li>
        <li className="footer-list-option">Contact Us</li>
        <li className="footer-list-option">Returns</li>
        <li className="footer-list-option">Site Map</li>
        <li className="footer-list-option">Shipping</li>
      </ul>

      <ul className="footer-list">
        <li className="footer-list-option1">Copyright © nicole_89</li>
        <div className="footer-media">
          <li className="footer-list-option">
            <FacebookIcon />
          </li>

          <li className="footer-list-option">
            <InstagramIcon />
          </li>
          <li className="footer-list-option">
            <TwitterIcon />
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
