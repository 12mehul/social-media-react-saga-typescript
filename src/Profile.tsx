import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrendingCards from "./components/TrendingCards";
import SharePostDisplay from "./components/SharePostDisplay";
import ProfileCard from "./components/ProfileCard";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { UserRequest } from "./redux/slice/userSlice";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(UserRequest());
  }, []);

  return (
    <Container>
      <Row className="w-100">
        <Col md={9} className="mx-auto">
          <ProfileCard />
          <SharePostDisplay page="profile" />
        </Col>
        <Col md={3}>
          <TrendingCards />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
