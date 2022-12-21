import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
  const cursorP = { cursor: 'pointer' };
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Loptops Category</h3>
          </LinkContainer>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          crossOrigin="anonymous"
          style={{ height: '300px', objectFit: 'cover' }}
          src="images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Books Category</h3>
          </LinkContainer>
          <p>World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          crossOrigin="anonymous"
          style={{ height: '300px', objectFit: 'cover' }}
          src="images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Cameras Category</h3>
          </LinkContainer>
          <p>
            4k Camcorder Video Camera 60FPS 48MP Vlogging Camera for Youtube
            WiFi 16X Digital Camera
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
