import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import portfolio from "../../assets/portfolio-icon.png";
import p1 from "../../assets/proj1.png";
import p2 from "../../assets/proj2.png";
import p3 from "../../assets/proj3.png";

import "./porject.scss";

const Projects = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="projects">
        <Col>
          <h1 className="heading">
            Our Recent <span style={{ color: "#6280BF" }}>Projects</span>{" "}
          </h1>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Button style={{ backgroundColor: "#6280BF", borderRadius: "5px" }}>
            <img src={portfolio} />
            VIEW PORTFOLIO
          </Button>
        </Col>
      </Row>
      <Row className="completed-projects">
        <Col md={4} className="d-flex justify-content-center py-3">
          <div className="single-project">
            <img src={p1} />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center py-3">
          <div className="single-project">
            <img src={p2} />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center py-3">
          <div className="single-project">
            <img src={p3} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
