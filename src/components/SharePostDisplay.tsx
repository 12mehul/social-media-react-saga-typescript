import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

const SharePostDisplay = () => {
  return (
    <Card className="bg-body rounded shadow-lg mt-2">
      <Card.Header className="fw-semibold fs-6" style={{ color: "#242d49" }}>
        Mehul zavery
      </Card.Header>
      <Card.Body>
        <Row className="w-100 g-3">
          <Col xs={12}></Col>
        </Row>
      </Card.Body>
      <Card.Body>
        <Row className="w-100 g-0 align-items-center">
          <Col xs={3} className="d-flex justify-content-between">
            <Button variant="light" title="Like" className="p-2 border-0">
              <FontAwesomeIcon
                icon={faLifeRing}
                size="lg"
                className="text-primary"
              />
            </Button>
            <Button
              variant="light"
              title="Add Location"
              className="p-2 border-0"
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="lg"
                className="text-danger"
              />
            </Button>
            <Button
              variant="light"
              title="Pick a Date"
              className="p-2 border-0"
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                size="lg"
                className="text-success"
              />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SharePostDisplay;
