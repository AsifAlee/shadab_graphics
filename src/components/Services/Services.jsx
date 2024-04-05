import React from "react";
import "./services.scss";
import ServiceCard from "./ServiceCard";
import logo from "../../assets/logo-design.png";
import bcard from "../../assets/b-card.png";
import letterHead from "../../assets/l-head.png";
import flyer from "../../assets/Flyers.png";
import brochure from "../../assets/brochure.png";
import envelope from "../../assets/envelop.png";
import productBox from "../../assets/pbox.png";
import webBanner from "../../assets/banner.png";
import sBanner from "../../assets/social-banner.png";
import pLabel from "../../assets/p-label.png";
import bookCover from "../../assets/book-cover.png";
import badges from "../../assets/badge.png";
import wordpress from "../../assets/wordpress.png";
import brandBook from "../../assets/brand-book.png";

const Services = () => {
  const serviceItems = [
    {
      name: "Logo Design",
      pic: logo,
    },
    {
      name: "Bussiness Card",
      pic: bcard,
    },
    {
      name: "Letterhead",
      pic: letterHead,
    },
    {
      name: "Flyers",
      pic: flyer,
    },
    {
      name: "Brochures",
      pic: brochure,
    },
    {
      name: "Envelopes",
      pic: envelope,
    },
    {
      name: "Product Box Designs",
      pic: productBox,
    },
    {
      name: "Web Banners",
      pic: webBanner,
    },
    {
      name: "Social Media Banners",
      pic: sBanner,
    },
    {
      name: "Product Labels",
      pic: pLabel,
    },
    {
      name: "Book Cover",
      pic: bookCover,
    },
    {
      name: "Badges",
      pic: badges,
    },
    {
      name: "Wordpress website",
      pic: wordpress,
    },
    {
      name: "Brand Book",
      pic: brandBook,
    },
  ];
  return (
    <div className="services">
      <div className="services-heading">
        <h1>
          Get All the Services <br />
          <span>Under One Hood</span>
        </h1>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
      </div>
      <div className="services-cards row container">
        {serviceItems.map((item) => (
          <ServiceCard logo={item.pic} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Services;
