import React from "react";
import "./slider.scss";
const SliderDot = ({ isActive }) => {
  return (
    <div
      className="dot"
      style={{ backgroundColor: isActive ? "#6280BF" : "" }}
    ></div>
  );
};

export default SliderDot;
