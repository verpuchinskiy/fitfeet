import "./section2.scss";
import Image from "../assets/section2.png";
import "animate.css/animate.min.css";

import React, { useEffect, useRef } from "react";

export const Section2 = () => {
  const textAnimation = useRef();
  const imageAnimation = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textAnimation.current.classList.add(
            "animate__animated",
            "animate__slideInRight"
          );
          imageAnimation.current.classList.add(
            "animate__animated",
            "animate__slideInLeft"
          );
        }
      });
    });

    observer.observe(textAnimation.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section2">
      <div className="left" ref={imageAnimation}>
        <img src={Image} />
      </div>
      <div className="right" ref={textAnimation}>
        <h1>A whole new technology</h1>
        <p>
          Introducing a breakthrough technology in sport sneakers that takes
          your performance to the next level. <br />
          <br />
          Our new sneaker line features cutting-edge technology that enhances
          your speed, agility, and endurance. The lightweight construction of
          these sneakers makes them perfect for long-distance running, while the
          durable materials used in their manufacture ensure they can withstand
          the toughest of training sessions.
          <br />
          <br /> Experience a whole new level of performance and take your
          workouts to new heights.
        </p>
        <button>SHOP</button>
      </div>
    </div>
  );
};
