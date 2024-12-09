import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMapMarkerAlt,
  faCalendarAlt,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store/store";
import { IUser } from "../redux/types/IUser";
import defaultProfile from "../assets/defaultProfile.png";

const SharePostCard = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const data = useSelector<AppState>((state) => state.profile.data) as IUser;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      const img = event.target.files[0];
      setImage(img);
    }
  };

  return (
    <Card className="bg-body rounded-4 shadow-lg">
      <div className="d-flex align-items-center border-2 border-bottom p-1">
        <img
          src={
            data?.profilePicture
              ? `${apiUrl}/images/${data.profilePicture}`
              : defaultProfile
          }
          alt="Profile"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Card.Text className="fw-bold fs-5 ms-2" style={{ color: "#242d49" }}>
          Create a Post
        </Card.Text>
      </div>
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
