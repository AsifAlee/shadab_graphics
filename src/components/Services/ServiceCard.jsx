import React from "react";
import logoDesign from "../../assets/logo-design.png";
import "./service-card.scss";
const ServiceCard = ({ logo, name }) => {
  return (
    <div className="service-card">
      <img src={logo} />
      <span>{name}</span>
    </div>
  );
};

export default ServiceCard;
