import { Accordion, Button } from "react-bootstrap";

const EditProfile = () => {
  return (
    <Accordion
      defaultActiveKey={["0", "2"]}
      alwaysOpen
      className="bg-body rounded-4 shadow-lg"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span
            style={{
              color: "#242d49",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Profile Info
          </span>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span
            style={{
              color: "#242d49",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Bio
          </span>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span
            style={{
              color: "#242d49",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Sign Out All Devices
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <Button variant="primary" className="w-100 fw-semibold">
            Log Out
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EditProfile;
