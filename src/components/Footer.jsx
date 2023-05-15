import "./footer.scss";
import React from "react";
import Logo from "../assets/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="horizontal_footer">
        <div className="left">
          <img src={Logo} />
        </div>
        <div className="center">
          <ul className="left_menu">
            <li>Menu</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Shoes</li>
            <li>Clothing</li>
          </ul>
          <ul className="right_menu">
            <li>About FitFeet</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Purpose</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
          <ul>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>FITFEET © 2023 / All Rights Reserved</p>
        <p>
          <a href="#">Terms of Service</a> / <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};
