import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ComponentHeading from '../ComponentHeading';
import './OurServices.css';
import ServicesCard from './OurServicesComponents/ServicesCard';

import { CgWebsite } from 'react-icons/cg';
// import { FaGooglePlay, FaBezierCurve } from 'react-icons/fa';

const OurServices = (props) => {
  var classname = 'OurServices dark';
  var classname1 = 'OurServices light';

  var DataMayur = {
    OurServices: {
      Card: [
        {
          id: 1,
          icon: 'CgWebsite',
          Heading: 'Website Development',
          description: 'A strategic approach to website design and development',
        },
        {
          id: 2,
          icon: 'FaGooglePlay',
          Heading: 'App Development',
          description: 'Life is too short for ordinary apps.',
        },
        {
          id: 3,
          icon: 'FaBezierCurve',
          Heading: 'Business Development',
          description: 'You’ve got us? You’ve got class.',
        },
      ],
    },
    TeamMembers: {
      Team: [
        {
          id: 1,
          photo: 'https://source.unsplash.com/random',
          name: 'SHUBHAM GAIKWAD',
          profession: 'DEVELOPER',
          instagram: 'https://www.instagram.com/bytectrl/',
          btnlink: 'shubham',
        },
        {
          id: 2,
          photo: 'https://source.unsplash.com/random',
          name: 'NISHANT JOSHI',
          profession: 'DEVELOPER',
          instagram: 'https://www.instagram.com/bytectrl/',
          btnlink: 'nishant',
        },
        {
          id: 3,
          photo: 'https://source.unsplash.com/random',
          name: 'MAYUR GAJULA',
          profession: 'DEVELOPER',
          instagram: 'https://www.instagram.com/bytectrl/',
          btnlink: 'mayur',
        },
      ],
    },
  };

  const [Cards, setCards] = useState();

  // const DATA = fetch('https://mahalaxmisanitary.com/test.json')
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   });

  fetch('https://mahalaxmisanitary.com/test.json')
    .then((res) => res.json())
    .then((result) => {
      console.log(result.OurServices[0]);
    });

  return (
    <Container fluid className="text-center OurServicesBG">
      <Container className={props.Theme ? classname1 : classname}>
        <ComponentHeading
          Heading="What we can do for you"
          Heading2="Our Awesome Service"
        />
        <div className="row">
          {/* <ServicesCard
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
          /> */}
        </div>
      </Container>
    </Container>
  );
};

export default OurServices;
