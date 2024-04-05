import React from "react";
import rocket from "../../assets/rocket.png";
import corp from "../../assets/corp.png";
import bman from "../../assets/bussiness-man.png";
import "./business-sec.css";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

const BusinessSec = () => {
  return (
    <div class="business-sec">
      <Container className="marq" fluid></Container>
      <h1 class="heading">Save Time Managing & Scaling Out Your Business</h1>
      <Container fluid className="cards-sec">
        <Row>
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center  px-3 py-3"
          >
            <div class="card">
              <div class="card-head">
                <img src={rocket} className="card-icon" />
                <span>For Startups</span>
              </div>
              <div class="card-content">
                Shadab Graphics focuses on providing the best possible services
                to businesses, helping them to establish or improve their
                presence through a professional makeover.
              </div>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center px-3 py-3"
          >
            <div class="card">
              <div class="card-head">
                <img src={corp} className="card-icon" />
                <span> For Coorporate Firms</span>
              </div>
              <div class="card-content">
                We develop visual identities resulting in a facelift for
                existing companies assisting them to stand out amongst their
                competition.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="bussiness-bottom" fluid>
        <Row>
          <Col md={2} sm={12}>
            <div className="image-div">
              <img src={bman} />
            </div>
          </Col>
          <Col md={10} sm={12} className="d-flex justify-content-center">
            <div className="right-div">
              <h1>Boost your business with Shadab Graphics!</h1>
              <Button
                variant="primary"
                style={{
                  // width: "21%",
                  backgroundColor: "#F5F5F5",
                  color: "#6280BF",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                Contact Today
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="bussiness-bottom row">
        <div className="image-div col-md-2 col-sm-12">
          <img src={bman} />
        </div>
        <div className="right-div col-md-10 col-sm-12">
          <h1>Boost your business with Shadab Graphics!</h1>
          <Button
            variant="primary"
            style={{
              width: "21%",
              backgroundColor: "#F5F5F5",
              color: "#6280BF",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            Contact Today
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default BusinessSec;
