import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css';

var classname = 'HeroSection container dark';
var classname1 = 'HeroSection container light';

const HeroSection = (props) => {
  return (
    <Container className={props.Theme ? classname1 : classname}>
      <Row>
        <Col lg className="BrandNameContainer">
          <h4 className="BrandName">
            <p className="lead">We Are</p>ByteCtrl
          </h4>
        </Col>
        <Col lg></Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
