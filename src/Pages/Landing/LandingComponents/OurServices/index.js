import React from 'react';
import { Container } from 'react-bootstrap';
import ComponentHeading from '../ComponentHeading';
import './OurServices.css';
import ServicesCard from './OurServicesComponents/ServicesCard';

import { CgWebsite } from 'react-icons/cg';
import { FaGooglePlay, FaBezierCurve } from 'react-icons/fa';

const OurServices = (props) => {
  var classname = 'OurServices dark';
  var classname1 = 'OurServices light';
  return (
    <Container fluid className="text-center OurServicesBG">
      <Container className={props.Theme ? classname1 : classname}>
        <ComponentHeading Heading="Our Services" Heading2="What we provide ?" />
        <div className="row">
          <ServicesCard
            icon={<CgWebsite />}
            Heading="Website Development"
            description="A strategic approach to website design and development"
          />
          <ServicesCard
            icon={<FaGooglePlay />}
            Heading="App Development"
            description="Life is too short for ordinary apps."
          />
          <ServicesCard
            icon={<FaBezierCurve />}
            Heading="Business Development"
            description="You’ve got us? You’ve got class."
          />
        </div>
      </Container>
    </Container>
  );
};

export default OurServices;
