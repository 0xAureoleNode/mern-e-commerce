import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* First Name Group */}
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter A Name
              </Form.Control.Feedback>
            </Form.Group>
            {/* Last Name Group */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Last Name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Your Last Name
              </Form.Control.Feedback>
            </Form.Group>
            {/* Email Group */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Your Email"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Email
              </Form.Control.Feedback>
            </Form.Group>
            {/* Password Group */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                minLength={6}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Password
              </Form.Control.Feedback>
            </Form.Group>
            {/* Repeat Password */}
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Repeat Password"
                name="confirmPassword"
                minLength={6}
              />
              <Form.Control.Feedback type="invalid">
                Both Passwords should match
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Do you have an account already?<Link to={'/login'}>Login</Link>
              </Col>
            </Row>

            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{' '}
              Submit
            </Button>
            <hr />
            <Alert show={false} variant="danger">
              User with that email already exists!
            </Alert>
            <Alert show={true} variant="info">
              User Created!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
