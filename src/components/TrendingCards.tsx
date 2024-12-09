import { Card, Col, Row } from "react-bootstrap";
import TrendingData from "../Data/trendingData.json";

const TrendingCards = () => {
  const trendingData = TrendingData;

  return (
    <Card className="bg-body rounded-4 shadow-lg">
      <div className="border-2 border-bottom p-2">
        <Card.Text className="fw-bold fs-5 ms-2" style={{ color: "#242d49" }}>
          Trending for you
        </Card.Text>
      </div>
      <Card.Body>
        <Row className="w-100 g-1 align-items-center">
          {trendingData.map((value, index) => (
            <Col xs={8} key={index}>
              <Card.Title
                className="fw-semibold fs-6"
                style={{ color: "#242d49" }}
              >
                #{value.name}
              </Card.Title>
              <Card.Text className="fw-medium ms-2">
                {value.shares}k Shares
              </Card.Text>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TrendingCards;
