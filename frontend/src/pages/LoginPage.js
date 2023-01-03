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

const LoginPage = () => {
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
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Email Group */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                name="email"
              />
            </Form.Group>
            {/* Password Group */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="doNotLogout"
                label="Do not logout"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don't you have an account?<Link to={'/register'}>Register</Link>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{' '}
              Login
            </Button>
            <hr />
            <Alert show={false} variant="danger">
              Wrong Credentials
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
