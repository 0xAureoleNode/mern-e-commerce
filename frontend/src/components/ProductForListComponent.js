import { Card, Button, Row, Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { LinkContainer } from 'react-router-bootstrap';

const ProductForListComponent = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: '30px', marginBottom: '50px' }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            crossOrigin="anonymous"
            variant="top"
            src={'/images/' + images[idx] + '-category.png'}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Luxurious Leather Wallet</Card.Title>
            <Card.Text>
              Upgrade your wallet game with this sleek and sophisticated leather
              wallet. Made with high-quality materials and expert craftsmanship,
              this wallet is built to last. It has plenty of storage space for
              all your cards, cash, and coins, and its compact design makes it
              easy to carry in your pocket or purse. Plus, its timeless style
              makes it perfect for any occasion. Treat yourself or a loved one
              to the gift of luxury with this must-have accessory.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} />
              (1)
            </Card.Text>
            <Card.Text className="h4">
              $124{' '}
              <LinkContainer to="/product-details">
                <Button variant="danger">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
