import "./shopSection.scss";
import ShoeImg1 from "../assets/shoe-sale1.png";
import ShoeImg2 from "../assets/shoe-sale2.png";
import ShoeImg3 from "../assets/shoe-sale3.png";

import React from "react";
import { SingleProduct } from "./SingleProduct";

export const ShopSection = () => {
  return (
    <div className="shop_section">
      <h1>The Latest Collection</h1>
      <div className="products">
        <SingleProduct img={ShoeImg1} name={"FitFeet X"} price={"200"} />
        <SingleProduct img={ShoeImg2} name={"FitFeet XR"} price={"180"} />
        <SingleProduct img={ShoeImg3} name={"FitFeet RTX"} price={"220"} />
      </div>
    </div>
  );
};
