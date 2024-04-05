import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import "./slider.scss";
import SliderDot from "./SliderDot";

const Slider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === testimonials?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? testimonials?.length - 1 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);
  return (
    <div className="slider">
      <div className="slider-card">
        <img src={testimonials[currentIndex].pic} />
        <p>{testimonials[currentIndex].feedback}</p>
      </div>
      <div className="dots">
        {testimonials.map((item, index) => (
          <SliderDot isActive={index === currentIndex ? true : false} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
