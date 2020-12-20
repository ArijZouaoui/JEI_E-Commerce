import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer-container" style={{height:"20vh"}}>

      <ul className="footer-list" style={{alignItems:'center'}}>
        <li className="footer-list-option1" style={{marginTop:'10px'}}>Copyright © JEI_TEAM_4</li>
        <div className="footer-media">
          <li className="footer-list-option"><a href='https://www.facebook.com/junior.entreprise.insat'>
            <FacebookIcon /></a>

          </li>

          <li className="footer-list-option">
            <a href='https://www.instagram.com/junior_entreprise_insat/?hl=fr'>
            <InstagramIcon /></a>
          </li>
          <li className="footer-list-option">
            <a href='https://www.linkedin.com/company/junior-entreprise-insat/'>
            <LinkedinIcon /></a>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;