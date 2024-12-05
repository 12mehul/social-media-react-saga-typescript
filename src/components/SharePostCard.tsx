import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMapMarkerAlt,
  faCalendarAlt,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const SharePostCard = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      const img = event.target.files[0];
      setImage(img);
    }
  };

  return (
    <Card className="bg-body rounded shadow-lg">
      <Card.Header className="fw-bold fs-5" style={{ color: "#242d49" }}>
        Create a Post
      </Card.Header>
      <Card.Body>
        <Row className="w-100 g-3">
          <Col xs={12}>
            <Form.Control
              type="text"
              placeholder="What's on your mind?"
              className="rounded-pill px-3"
            />
          </Col>
          {image && (
            <Col xs={5} className="position-relative">
              <Card.Img variant="top" src={URL.createObjectURL(image)} />
              <Button
                variant="light"
                title="Cancel"
                className="p-2 border-0 position-absolute top-0 end-0"
                onClick={() => setImage(null)}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  className="text-black"
                />
              </Button>
            </Col>
          )}
        </Row>
      </Card.Body>
      <Card.Body>
        <Row className="w-100 g-0 align-items-center">
          <Col xs={3} className="d-flex justify-content-between">
            <Button
              variant="light"
              title="Upload Image"
              className="p-2 border-0"
              onClick={() => fileInputRef.current?.click()}
            >
              <FontAwesomeIcon
                icon={faImage}
                size="lg"
                className="text-primary"
              />
            </Button>
            <Form.Control
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
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
          <Col xs={9} className="text-end">
            <Button variant="primary" className="px-4">
              Post
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SharePostCard;
