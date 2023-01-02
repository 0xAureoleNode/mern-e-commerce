import { Form } from 'react-bootstrap';

const AttributesFilterComponent = () => {
  return (
    <>
      {[
        { color: ['red', 'blue', 'green'] },
        { ram: ['1 TB', '2 TB', '4 TB'] },
      ].map((item, idx) => (
        <div key={idx} className="mb-3">
          <Form.Label>{Object.keys(item)}</Form.Label>
          {item[Object.keys(item)].map((i, idx) => (
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              key={idx}
              label={i}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
