import "./section4.scss";

import React, { useEffect, useRef } from "react";

export const Section4 = () => {
  const textAnimation = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textAnimation.current.classList.add(
            "animate__animated",
            "animate__fadeIn"
          );
        }
      });
    });

    observer.observe(textAnimation.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section4">
      <div className="text_block" ref={textAnimation}>
        <h1>Time to go for a walk</h1>
        <p>
          With your new pair of FitFeet sneakers. <br />
          <br />
          Don't let uncomfortable shoes hold you back, walk with confidence and
          comfort. Lace up your FitFeet sneakers and take the first step towards
          a healthier you!
        </p>
        <button>SHOP</button>
      </div>
    </div>
  );
};
