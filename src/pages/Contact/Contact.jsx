import React from "react";
import "./contact.css";
import {
  AlertLink,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import phone_icon from "../../assets/phone_icon.png";
import loc_icon from "../../assets/location.png";
import mail_icon from "../../assets/mail.png";

const Contact = () => {
  return (
    <div className="contact-us">
      <Container fluid>
        <Row>
          <Col>
            <div className="contact-intro">
              <h2>GET IN TOUCH</h2>
              <h1>Contact Us</h1>
              <p>
                We have world-class, flexible support via live chat, email, and
                phone. I guarantee that you’ll be able to have any issue
                resolved within 24 hours. contact us!
              </p>
              <div className="underline"></div>
            </div>
          </Col>
        </Row>
        <div className="send-msg-form">
          <Form>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="primary"
              type="submit"
              style={{ background: "#6280BF" }}
            >
              Send Message
            </Button>
          </Form>
        </div>

        <Container className="contact-info">
          <Row>
            <Col className="d-flex justify-content-center" md={4} sm={12}>
              <div className="contact-item">
                <div className="item">
                  <img src={phone_icon} />
                </div>
                <span className="text">+1(343) 596-8145</span>
              </div>
            </Col>
            <Col className="d-flex justify-content-center" md={4} sm={12}>
              <div className="contact-item">
                <div className="item">
                  <img src={loc_icon} />
                </div>
                <span className="text">
                  Lower Ground, Marvel Arcade, Gulberg Greens, Islamabad
                </span>
              </div>
            </Col>
            <Col className="d-flex justify-content-center" md={4} sm={12}>
              <div className="contact-item">
                <div className="item">
                  <img src={mail_icon} />
                </div>
                <span className="text">
                  support@alestrasol.com email@alestrasol.com
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
