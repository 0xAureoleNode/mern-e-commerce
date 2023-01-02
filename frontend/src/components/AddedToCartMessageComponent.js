import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          <Button variant="success">Go Back</Button>{' '}
          <Link to="/cart">
            <Button variant="danger">Go To Cart</Button>
          </Link>
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export default AddedToCartMessageComponent;
