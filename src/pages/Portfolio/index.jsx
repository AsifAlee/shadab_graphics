import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./portfolio.css";
import { Link } from "react-router-dom";
import ContainerExample from "../../components/TestContainer";
import row1 from "../../assets/row1.png";
import row2 from "../../assets/row2.png";
import row3 from "../../assets/row3.png";
import row4 from "../../assets/row4.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Container fluid>
        <Row>
          <Col>
            <div className="port-intro">
              <h2>Portfolio</h2>
              <h1>
                Take a Look Around <Link to="/porfolio">Our Portfolio</Link>{" "}
              </h1>
              <div>
                <Button>LOGO DESIGN</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mb-3">
        <Row>
          <Col>
            <img src={row1} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={row2} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={row3} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={row4} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
