import React from 'react';
import { Container } from 'react-bootstrap';
import './OurServices.css';

const OurServices = () => {
  var classname = 'OurServices dark';
  var classname1 = 'OurServices light';
  return (
    <Container fluid>
      <Container className={props.Theme ? classname1 : classname}>
        <h1>Our Services</h1>
      </Container>
    </Container>
  );
};

export default OurServices;
