import { Col, Container, Row } from "react-bootstrap";
import PeopleCards from "./components/PeopleCards";
import SharePostCard from "./components/SharePostCard";
import TrendingCards from "./components/TrendingCards";
import SharePostDisplay from "./components/SharePostDisplay";

const Home = () => {
  return (
    <Container>
      <Row className="w-100">
        {/* Left Column */}
        <Col md={3}>
          <PeopleCards page="home" />
        </Col>
        {/* Center Column */}
        <Col md={6} className="mx-auto">
          <SharePostCard />
          <SharePostDisplay page="home" />
        </Col>
        {/* Right Column */}
        <Col md={3}>
          <TrendingCards />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
