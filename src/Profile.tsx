import { Col, Container, Row } from "react-bootstrap";
import TrendingCards from "./components/TrendingCards";
import SharePostDisplay from "./components/SharePostDisplay";
import ProfileCard from "./components/ProfileCard";

const Profile = () => {
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
