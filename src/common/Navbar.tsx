import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import socialIcon from "../assets/social-icon.webp";

const Navbars = () => {
  return (
    <Navbar className="py-2">
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Left Side: Social Icon */}
          <Col xs={3} className="d-flex justify-content-start">
            <img
              src={socialIcon}
              alt="Social Media Logo"
              style={{ maxWidth: "50px", height: "auto" }}
            />
          </Col>

          {/* Center: Menu Links */}
          <Col xs={6}>
            <Nav className="justify-content-center gap-4">
              <Nav.Link
                href="#home"
                className="nav-icon d-flex flex-column align-items-center fw-bold"
              >
                <FontAwesomeIcon icon={faHome} size="xl" />
                <span className="nav-label">Home</span>
              </Nav.Link>
              <Nav.Link
                href="#profile"
                className="nav-icon d-flex flex-column align-items-center fw-bold"
              >
                <FontAwesomeIcon icon={faUser} size="xl" />
                <span className="nav-label">Profile</span>
              </Nav.Link>
              <Nav.Link
                href="#settings"
                className="nav-icon d-flex flex-column align-items-center fw-bold"
              >
                <FontAwesomeIcon icon={faCog} size="xl" />
                <span className="nav-label">Settings</span>
              </Nav.Link>
            </Nav>
          </Col>

          {/* Right Side */}
          <Col xs={3}></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbars;
