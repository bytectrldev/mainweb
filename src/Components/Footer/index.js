import React from 'react';
import '../../Components/Footer/Footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../Components/Footer/FooterAssets/bytectrltext.png';
import SocialIcons from './FooterComponents/SocialMedia/SocialIcons';
// import Gradient from 'rgt';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return(
      <div>
        <Container fluid>
          <Row className='p-2 bg-dark' xs={2} md={4} lg={6}>
            <Col xs={12} md={4} className="pt-3">
              <img src={logo} alt='logo' height='50em'/>
            </Col>
            <Col xs={12} md={4} className="text-center">
                <SocialIcons/>
            </Col>
            <Col xs={12} md={4} style={{fontSize:"1.5em"}}  className="text-muted text-center">
                Copyright © 2022 All rights reserved by <span style={{color:'whitesmoke'}}>ByteCtrl</span>.
            </Col>
          </Row> 
        </Container>
      </div>
  );
};

export default Footer;
