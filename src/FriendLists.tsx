import { Col, Container, Row } from "react-bootstrap";
import TrendingCards from "./components/TrendingCards";
import PeopleCards from "./components/PeopleCards";

const FriendLists = () => {
  return (
    <Container>
      <Row className="w-100">
        <Col md={9}>
          <PeopleCards page="friendlist" />
        </Col>
        <Col md={3}>
          <TrendingCards />
        </Col>
      </Row>
    </Container>
  );
};

export default FriendLists;
