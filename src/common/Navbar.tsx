import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import socialIcon from "../assets/social-icon.webp";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { useEffect } from "react";
import { ProfileRequest } from "../redux/slice/profileSlice";

const Navbars = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      dispatch(ProfileRequest(userId));
    }
  }, []);

  return (
    <Navbar>
      <Container>
        <Row className="w-100 align-items-center bg-body rounded-4 shadow-lg">
          {/* Left Side: Social Icon */}
          <Col xs={3} className="d-flex justify-content-start">
            <img
              src={socialIcon}
              alt="Social Media Logo"
              style={{ maxWidth: "50px", height: "auto", borderRadius: "10px" }}
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
                href="#friendlists"
                className="nav-icon d-flex flex-column align-items-center fw-bold"
              >
                <FontAwesomeIcon icon={faUserFriends} size="xl" />
                <span className="nav-label">Friends List</span>
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
