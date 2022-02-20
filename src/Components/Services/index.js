import React from 'react';
import { Card, Row, Container } from 'react-bootstrap';
import Button from '../Button';
import './Services.css';
import ServicesData from './ServicesData';

function Services(props) {
  const Services = () => {
    return ServicesData.map((data) => {
      return (
        <div key={data.id} className="col-md card_container">
          <Card className="service_card m-3">
            <Card.Img variant="top" src={data.photo} className="cardimg" />
            <Card.Body className="cardbody">
              <Card.Title className="servicename">{data.name}</Card.Title>
              <Card.Text className="servicetype">
                {data.type}
              </Card.Text>
              <Row className="medialinks">
                <Button/>
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div>
      <Container className="p-5 servicecontainer">
        <h5>Our Project</h5>
        <h1 style={{ color: props.Theme ? 'white' : 'black' }}>
          Some of our Recent Works
        </h1>
        <Row>
          <Services />
        </Row>
      </Container>
    </div>
  );
}

export default Services;
