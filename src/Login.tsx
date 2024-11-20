import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import socialImg from "./assets/login-img.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { useFormik } from "formik";
import { loginRequest } from "./redux/slice/loginSlice";
import { ILogin } from "./redux/types/ILogin";
import * as Yup from "yup";

const initialValues: ILogin = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: AppState) => state.login.responseData);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        dispatch(loginRequest(values));
        action.resetForm();
      },
    });

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate("/home");
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
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            className="p-4 rounded-4 shadow-sm bg-transparent"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h3 className="text-center mb-4 text-muted fw-bold">Log In</h3>
            <Form onSubmit={handleSubmit}>
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
              </Row>
              <Button
                variant="primary"
                type="submit"
                className="w-100 p-2 rounded-3"
              >
                Login
              </Button>
            </Form>
            <p className="text-center mt-2 text-white">
              Don't have an account?
              <a href="/" className="link-primary fw-semibold">
                {" "}
                SignUp
              </a>{" "}
              here
            </p>
          </Card>
        </Col>
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
      </Row>
    </Container>
  );
};

export default Login;
