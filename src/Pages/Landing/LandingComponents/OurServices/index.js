import React from 'react';
import { Container } from 'react-bootstrap';
import ComponentHeading from '../ComponentHeading';
import './OurServices.css';

const OurServices = (props) => {
  var classname = 'OurServices dark';
  var classname1 = 'OurServices light';
  return (
    <Container fluid className="text-center">
      <Container className={props.Theme ? classname1 : classname}>
        <ComponentHeading Heading="What we can do for you" Heading2="Our Awesome Service" />
      </Container>
    </Container>
  );
};

export default OurServices;
