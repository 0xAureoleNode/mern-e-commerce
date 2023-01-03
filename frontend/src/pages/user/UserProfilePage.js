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

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmPassword');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Password do not match');
    }
  };

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
          <h1>User Profile</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* First Name Group */}
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="John"
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
                defaultValue="Doe"
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
                disabled
                value="john@doe.com if you want to change email, remove account and create new one with new email address"
              />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                defaultValue=""
              />
            </Form.Group>

            {/* Address */}
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Street name and house number"
                defaultValue=""
              />
            </Form.Group>

            {/* Country */}
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Country"
                defaultValue=""
              />
            </Form.Group>

            {/* Zip */}
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your zip code"
                defaultValue=""
              />
            </Form.Group>

            {/* City */}
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your City"
                defaultValue=""
              />
            </Form.Group>

            {/* state */}
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your state"
                defaultValue=""
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
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter A Valid Password
              </Form.Control.Feedback>
              <Form.Control.Feedback type="text-muted">
                Please Should have at least 6 characters
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
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Both Passwords should match
              </Form.Control.Feedback>
              <Form.Control.Feedback type="text-muted">
                Please Should have at least 6 characters
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
            <hr />
            <Alert show={false} variant="danger">
              User with that email already exists!
            </Alert>
            <Alert show={true} variant="info">
              User Updated!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
