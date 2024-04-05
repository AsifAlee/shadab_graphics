import React from "react";
import fb from "../../assets/facebook.png";
import inst from "../../assets/inst.png";
import linkedin from "../../assets/linkedin.png";

import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col>
          <div className="left">
            <div className="logo-text">
              <h2>SHADAB</h2>
              <span>Graphics</span>
            </div>
            <div className="about">
              <h1>About Us</h1>
              <p className="about-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="footer-middle">
            <p className="heading">Services</p>
            <div className="list">
              <span>Logo Design</span>
              <span>Bussiness Card</span>
              <span>Letterhead</span>
              <span>Flyers</span>
              <span>Brochures</span>
              <span>Envelospanes</span>
              <span>spanroduct Box Design</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="footer-right">
            <span>Web Banners</span>
            <span>Social Media Banners</span>
            <span>spanroduct Labels</span>
            <span>Book Cover</span>
            <span>Badges</span>
            <span>Wordspanress Website</span>
            <span>Brand Book</span>
          </div>
        </Col>
      </Row>
      <div className="social-links">
        <img src={fb} />
        <img src={inst} />
        <img src={linkedin} />
      </div>
    </Container>
  );
};

export default Footer;
