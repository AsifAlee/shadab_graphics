import React from "react";
import "./testimonial.scss";
import Slider from "../Slider/Slider";
import profile from "../../assets/profile.png";
import { testimonialContent } from "../../constants";
import TestimonialCards from "./TestimonialCards";
import industryExp from "../../assets/industry-exp.png";
import happyClient from "../../assets/happy-client.png";
import teamStr from "../../assets/team.png";
import projects from "../../assets/projects.png";
import { Col, Row } from "react-bootstrap";
const Testimonial = () => {
  const testimonials = [
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      pic: profile,
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      pic: profile,
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      pic: profile,
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      pic: profile,
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      pic: profile,
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      pic: profile,
    },
  ];
  return (
    <div className="testimonials">
      <div className="testimonial-heading">
        <h1>
          What <span>Our Clients</span> Say
        </h1>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
      </div>
      <div
        className="testimonial-cont row"

        //   style={{ border: "1px solid" }}
      >
        <div className="slider-sec col-md-6">
          <h3>We Care About Our Customers Experience Too</h3>
          <Slider testimonials={testimonials} />
        </div>
        <div
          className="testimonial-cards-sec col-md-6"
          //   style={{ border: "1px solid" }}
        >
          <Row>
            <Col>
              <div
                className="testimonial-card"
                style={{ position: "relative", bottom: "17px" }}
              >
                <img src={industryExp} />
                <h2>
                  <span>14+Years</span>
                  <br />
                  Industry Experience
                </h2>
              </div>
            </Col>
            <Col>
              <div className="testimonial-card">
                <img src={happyClient} />
                <h2>
                  <span>517+</span>
                  <br />
                  Happy Clients
                </h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                className="testimonial-card"
                style={{ position: "relative", bottom: "17px" }}
              >
                <img src={teamStr} />
                <h2>
                  <span>90+</span>
                  <br />
                  Team Strength
                </h2>
              </div>
            </Col>
            <Col>
              <div className="testimonial-card">
                <img src={projects} />
                <h2>
                  <span>3000+</span>
                  <br />
                  Projects
                </h2>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
