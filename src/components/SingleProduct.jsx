import "./singleProduct.scss";

import React from "react";

export const SingleProduct = ({ img, name, price }) => {
  return (
    <div className="single_product">
      <img src={img} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};
