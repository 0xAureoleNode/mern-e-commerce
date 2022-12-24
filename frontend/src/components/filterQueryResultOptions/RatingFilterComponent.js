import React, { Fragment } from 'react';
import { Rating } from 'react-simple-star-rating';
import Form from 'react-bootstrap/Form';

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, id) => {
        return (
          <Fragment key={id}>
            <Form.Check type="checkbox" id={`check-api-${id}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label style={{ cursor: 'pointer' }}>
                <Rating size={20} initialValue={5 - id} />
              </Form.Check.Label>
            </Form.Check>
          </Fragment>
        );
      })}
    </>
  );
};

export default RatingFilterComponent;
