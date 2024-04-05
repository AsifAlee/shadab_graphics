import React from "react";
import ContactToday from "../../components/ContactToday/ContactToday";
import BusinessSec from "../../components/BussinessSec/BusinessSec";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";
import Projects from "../../components/Projects/Projects";
import SendMessage from "../../components/SendMessage/SendMessage";
import "./home.css";
const Home = () => {
  return (
    <div>
      <ContactToday />
      <BusinessSec />
      <Services />
      <Testimonial />
      <Projects />
      <SendMessage />
    </div>
  );
};

export default Home;
