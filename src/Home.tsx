import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="text-center text-white">Welcome to Home Page</h1>
    </Container>
  );
};

export default Home;
