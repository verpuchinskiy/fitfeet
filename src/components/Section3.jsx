import "./section3.scss";
import Image from "../assets/section3.png";
import "animate.css/animate.min.css";

import React, { useEffect } from "react";
import { useRef } from "react";

export const Section3 = () => {
  const imageAnimation = useRef();
  const textAnimation = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textAnimation.current.classList.add(
            "animate__animated",
            "animate__slideInUp"
          );
        }
      });
    });

    observer.observe(textAnimation.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section3">
      <div className="top" ref={imageAnimation}>
        <img
          src={Image}
          loading="lazy"
          onLoad={() => {
            imageAnimation.current.classList.add(
              "animate__animated",
              "animate__zoomIn"
            );
          }}
        />
      </div>
      <div className="bottom" ref={textAnimation}>
        <h1>The revolutionary sole type</h1>
        <p>
          Designed to elevate your performance to the next level. With its
          advanced shock-absorbing and traction-enhancing properties, you'll
          experience unparalleled comfort and stability during even the most
          intense workouts. Whether you're a seasoned athlete or just starting
          out on your fitness journey, our new sole type is the perfect choice
          for anyone looking to step up their game.{" "}
        </p>
        <button>SHOP</button>
      </div>
    </div>
  );
};
