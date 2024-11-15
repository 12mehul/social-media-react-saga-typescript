import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import socialImg from "./assets/social-img.png";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center p-0"
        >
          <div style={{ maxWidth: "100%" }}>
            <img
              src={socialImg}
              alt="Social Media Graphic"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            className="p-4 rounded-4 shadow-sm bg-transparent"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h3 className="text-center mb-4 text-muted fw-bold">Log In</h3>
            <Form>
              <Form.Group className="mb-3" as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="p-2 bg-dark-subtle"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="p-2 bg-dark-subtle"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
              </Row>
              <Button
                variant="primary"
                type="submit"
                className="w-100 p-2 rounded-3"
              >
                Login
              </Button>
            </Form>
            <p className="text-center mt-2 text-white">
              Don't have an account?
              <a href="/" className="text-white text-decoration-none">
                {" "}
                SignUp
              </a>{" "}
              here
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
