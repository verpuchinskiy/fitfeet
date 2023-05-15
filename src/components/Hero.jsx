import "./hero.scss";
import HeroShoe from "../assets/hero-shoe.png";

import React from "react";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="left">
          <h1>Run like never before</h1>
          <p>
            FitFeet sneakers are designed to help you achieve your running goals
            with maximum comfort and style. Whether you are an experienced
            runner or just starting out, our collection has something for
            everyone. <br /> <br /> Our sneakers feature innovative technologies
            such as cushioned soles, breathable fabrics, and sturdy materials
            that provide you with the ultimate support and comfort during your
            runs. With a range of colors and styles to choose from, you can mix
            and match to create a unique look that expresses your personality
            and style.
          </p>
        </div>
        <div className="right">
          <img src={HeroShoe} alt="" />
        </div>
      </div>
    </>
  );
};
