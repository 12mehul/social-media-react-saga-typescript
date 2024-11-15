import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { useFormik } from "formik";
import { registrationRequest } from "./redux/slice/registrationSlice";
import { IRegistration } from "./redux/types/IRegistration";
import * as Yup from "yup";
import socialImg from "./assets/social-img.png";
import { useNavigate } from "react-router-dom";

const initialValues: IRegistration = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpass: "",
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmpass: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords do not match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>(
    (state) => state.registration.responseData
  );

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        dispatch(registrationRequest(values));
        action.resetForm();
      },
    });

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [data]);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center p-0"
        >
          <div style={{ maxWidth: "100%" }}>
            <img
              src={socialImg}
              alt="Social Media Graphic"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            className="p-4 rounded-4 shadow-sm"
            style={{
              maxWidth: "500px",
              width: "100%",
              backgroundColor: "#9bdbc1",
            }}
          >
            <h3 className="text-center mb-4 text-muted fw-bold">Sign Up</h3>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    className="p-2 bg-dark-subtle"
                    type="text"
                    name="firstname"
                    placeholder="Enter First Name"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstname && errors.firstname && (
                    <Form.Text className="text-danger">
                      {errors.firstname}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="p-2 bg-dark-subtle"
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastname && errors.lastname && (
                    <Form.Text className="text-danger">
                      {errors.lastname}
                    </Form.Text>
                  )}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="p-2 bg-dark-subtle"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <Form.Text className="text-danger">{errors.email}</Form.Text>
                )}
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="p-2 bg-dark-subtle"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="confirmpass">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    className="p-2 bg-dark-subtle"
                    type="password"
                    name="confirmpass"
                    placeholder="Enter Confirm Password"
                    value={values.confirmpass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.confirmpass && errors.confirmpass && (
                    <Form.Text className="text-danger">
                      {errors.confirmpass}
                    </Form.Text>
                  )}
                </Form.Group>
              </Row>
              <Button
                variant="primary"
                type="submit"
                className="w-100 p-2 rounded-3"
              >
                Sign Up
              </Button>
            </Form>
            <p className="text-center mt-2 text-white">
              Already have an account?
              <a href="/login" className="text-white text-decoration-none">
                {" "}
                Login
              </a>{" "}
              here
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
