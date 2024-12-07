import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const PeopleCards = () => {
  return (
    <Card className="bg-body rounded-4 shadow-lg">
      <Card.Header className="fw-bold fs-5" style={{ color: "#242d49" }}>
        People you may know...
      </Card.Header>
      <Card.Body>
        <Row className="w-100 g-0 align-items-center">
          <Col xs={8}>
            <Card.Title
              className="fw-semibold fs-6"
              style={{ color: "#242d49" }}
            >
              Featured
            </Card.Title>
            <Card.Text className="fw-medium">With supporting</Card.Text>
          </Col>
          <Col>
            <Button variant="primary">Unfollow</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PeopleCards;
