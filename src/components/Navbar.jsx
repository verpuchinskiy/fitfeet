import "./navbar.scss";
import React from "react";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="menu">
        <img src={Logo}></img>
        <nav>
          <ul>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Tops</a>
            </li>
            <li>
              <a href="#">Gear</a>
            </li>
          </ul>
        </nav>
      </div>
      <button>Buy Now</button>
    </div>
  );
};
