import React from 'react';
import { Card, Row, Container } from 'react-bootstrap';
import './TeamMember.css';
import SocialIcons from '../Footer/FooterComponents/SocialMedia/index';
import TeamData from './TeamData';
import ComponentHeading from '../../Pages/Landing/LandingComponents/ComponentHeading';

function TeamMember(props) {
  const Team = () => {
    return TeamData.map((data) => {
      return (
        <div key={data.id} className="col-md card_container">
          <Card className="tm_card m-3">
            <Card.Img variant="top" src={data.photo} className="cardimg" />
            <Card.Body className="cardbody">
              <Card.Title className="teamname">{data.name}</Card.Title>
              <Card.Text className="teamprofession">
                {data.profession}
              </Card.Text>
              <Row className="medialinks">
                <SocialIcons page="teamdata" size="2.3em" color="white" />
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div>
      <Container className="p-5 teamcontainer">
        <ComponentHeading Heading="Our Experts" Heading2="Managing team" />
        <Row>
          <Team />
        </Row>
      </Container>
    </div>
  );
}

export default TeamMember;
