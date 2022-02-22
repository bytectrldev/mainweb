import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ComponentHeading from '../ComponentHeading';
import './OurServices.css';
import ServicesCard from './OurServicesComponents/ServicesCard';

import { CgWebsite } from 'react-icons/cg';
import { FaGooglePlay, FaBezierCurve } from 'react-icons/fa';

const OurServices = (props) => {
  var classname = 'OurServices dark';
  var classname1 = 'OurServices light';

  const [Cards, setCards] = useState([]);

  // const DATA = fetch('https://mahalaxmisanitary.com/test.json')
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   });
  useEffect(() => {
    fetch('https://mahalaxmisanitary.com/TestData.json')
      .then((res) => res.json())
      .then((result) => {
        console.log(result.OurServices.Card[0]);
        setCards(result.OurServices.Card);
      });
  }, []);

  console.log(Cards);

  const CardComponent = () => {
    return Cards.map((a) => {
      const Tag = a.icon;

      return (
        <ServicesCard
          key={a.id}
          icon={a.icon}
          Heading={a.Heading}
          description={a.description}
        />
      );
    });
  };

  return (
    <Container fluid className="text-center OurServicesBG">
      <Container className={props.Theme ? classname1 : classname}>
        <ComponentHeading
          Heading="What we can do for you"
          Heading2="Our Awesome Service"
        />
        <div className="row">
          <CardComponent />
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
