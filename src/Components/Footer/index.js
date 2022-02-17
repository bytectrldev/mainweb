import React from 'react';
import '../../Components/Footer/Footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../Components/Footer/FooterAssets/bytectrltext.png';
import SocialIcons from './FooterComponents/SocialMedia/SocialIcons';
// import Gradient from 'rgt';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = (props) => {
  return(
      <div className={props.Theme ?'light_theme':'dark_theme'} style={{minWidth:"320px"}}>
        <Container>
          <Row className='p-2' xs={2} md={4} lg={6}>
            <Col xs={12} md={6} className="text-center">
                <SocialIcons/>
            </Col>
            <Col xs={12} md={6} className="text-muted copyright_text text-center">
                Copyright © 2022 All rights reserved by <span>ByteCtrl</span>.
            </Col>
          </Row> 
        </Container>
      </div>
  );
};

export default Footer;
