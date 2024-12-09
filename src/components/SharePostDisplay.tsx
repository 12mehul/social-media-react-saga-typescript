import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentDots,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import defaultProfile from "../assets/defaultProfile.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store/store";
import { IUser } from "../redux/types/IUser";
import { TimelineRequest } from "../redux/slice/timelineSlice";
import { ITimeline } from "../redux/types/ITimeline";

const SharePostDisplay = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector<AppState>((state) => state.user.data) as IUser[];
  const timeline = useSelector<AppState>(
    (state) => state.timeline.data
  ) as ITimeline[];
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      dispatch(TimelineRequest(userId));
    }
  }, []);

  const findUser = (userId: string) => user.find((user) => user._id === userId);

  return (
    <>
      {timeline.map((value) => {
        const matchedUser = findUser(value.userId);
        return (
          <Card className="bg-body rounded-4 shadow-lg mt-2" key={value._id}>
            <div className="d-flex align-items-center justify-content-between border-2 border-bottom p-2">
              <div className="d-flex align-items-center">
                <img
                  src={
                    matchedUser?.profilePicture
                      ? `${apiUrl}/images/${matchedUser.profilePicture}`
                      : defaultProfile
                  }
                  alt="Profile"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Card.Text
                  className="fw-semibold text-capitalize fs-6 ms-2 mb-0"
                  style={{ color: "#242d49" }}
                >
                  {matchedUser?.firstname} {matchedUser?.lastname}
                </Card.Text>
              </div>
              <Card.Text className="fw-medium text-secondary mb-0">
                {value.createdAt.split("T")[0]}
              </Card.Text>
            </div>
            <Card.Body>
              <Row className="w-100 g-3">
                <Col xs={12}>
                  {value.image && (
                    <img
                      src={`${apiUrl}/images/${value.image}`}
                      alt="Profile"
                      style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "10%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Col>
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
                  <Button
                    variant="light"
                    title="Comment"
                    className="p-2 border-0"
                  >
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      size="lg"
                      className="text-body-secondary"
                    />
                  </Button>
                  <Button
                    variant="light"
                    title="Share"
                    className="p-2 border-0"
                  >
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      size="lg"
                      className="text-body-secondary"
                    />
                  </Button>
                </Col>
              </Row>
              <div className="d-flex align-items-center">
                <Card.Text className="fw-medium text-secondary me-3 mb-0">
                  0 likes
                </Card.Text>
                <Card.Text className="fw-medium mb-0">{value.desc}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default SharePostDisplay;
