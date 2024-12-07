import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store/store";
import { IUser } from "../redux/types/IUser";
import { useEffect } from "react";
import { UserRequest } from "../redux/slice/userSlice";

const PeopleCards = () => {
  const apiUrl = "http://localhost:4000/images";
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>((state) => state.user.data) as IUser[];
  const userId = localStorage.getItem("userId");
  const filterData = data.filter((item) => item._id !== userId);

  useEffect(() => {
    dispatch(UserRequest());
  }, []);

  return (
    <Card className="bg-body rounded-4 shadow-lg">
      <Card.Header className="fw-bold fs-5" style={{ color: "#242d49" }}>
        People you may know...
      </Card.Header>
      {data.map((value) => (
        <Card.Body key={value._id} className="border-2 border-bottom rounded-4">
          <Row className="w-100 g-0 align-items-center">
            <Col xs={8}>
              <Row className="align-items-center">
                {value.profilePicture && (
                  <img
                    src={`${apiUrl}/${value.profilePicture}`}
                    alt="img"
                    style={{
                      maxWidth: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <Col>
                  <Card.Title
                    className="fw-semibold fs-6 text-capitalize mb-0"
                    style={{ color: "#242d49" }}
                  >
                    {value.firstname} {value.lastname}
                  </Card.Title>
                  <Card.Text
                    className="fw-medium ms-1"
                    style={{ fontSize: "15px" }}
                  >
                    @{value.firstname}
                    {value.lastname}
                  </Card.Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button variant="primary">Unfollow</Button>
            </Col>
          </Row>
        </Card.Body>
      ))}
    </Card>
  );
};

export default PeopleCards;
