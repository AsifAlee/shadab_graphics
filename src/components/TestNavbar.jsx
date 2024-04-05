import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import consultIcon from "../assets/consult-icon.png";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ padding: 0 }}
    >
      <Container fluid style={{ backgroundColor: "#E6E6E6" }}>
        <Navbar.Brand>
          <Link to="/home">
            <img src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/portfolio">Portfolio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services">Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact">Contact Us</Link>
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <div className="get-consultation">
              <img src={consultIcon} />
              <span>Get Free Consultation</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
