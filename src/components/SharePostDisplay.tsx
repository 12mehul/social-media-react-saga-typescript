import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentDots,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const SharePostDisplay = () => {
  return (
    <Card className="bg-body rounded-4 shadow-lg mt-2">
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
                icon={faThumbsUp}
                size="lg"
                className="text-body-secondary"
              />
            </Button>
            <Button variant="light" title="Comment" className="p-2 border-0">
              <FontAwesomeIcon
                icon={faCommentDots}
                size="lg"
                className="text-body-secondary"
              />
            </Button>
            <Button variant="light" title="Share" className="p-2 border-0">
              <FontAwesomeIcon
                icon={faShareAlt}
                size="lg"
                className="text-body-secondary"
              />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SharePostDisplay;
