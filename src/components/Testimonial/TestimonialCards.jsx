import React from "react";
import "./testimonial-card.scss";
import team from "../../assets/team.png";
const TestimonialCards = ({ item, index }) => {
  return (
    <div className="testimonial-card">
      <img src={item.pic} />
      <h2>
        <span>{item.nums}</span>
        {item.text}
      </h2>
    </div>
  );
};

export default TestimonialCards;
