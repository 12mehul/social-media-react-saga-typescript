import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { useFormik } from "formik";
import { registrationRequest } from "./redux/slice/registrationSlice";
import { IRegistration } from "./redux/types/IRegistration";
import * as Yup from "yup";

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
  const dispatch = useDispatch<AppDispatch>();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        dispatch(registrationRequest(values));
      },
    });

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #80deea)",
      }}
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <Card className="p-2 rounded-4" bg="white" border="light">
          <h3 className="text-center mb-4">Register</h3>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="fs-5"
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
                  className="fs-5"
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
                className="fs-5"
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
                  className="fs-5"
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
                  className="fs-5"
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
