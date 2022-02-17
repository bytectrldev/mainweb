import React from 'react';
import '../../Components/Footer/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../Components/Footer/FooterAssets/bytectrltext.png';
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
// import Gradient from 'rgt';
// import 'bootstrap/dist/css/bootstrap.min.css';
const MainLink = (props) => {
  return <a href={props.link}>{props.element}</a>;
};

const Footer = (props) => {
  return (
    <div>
      <Container fluid>
        <Row
          className={
            props.Theme ? 'p-2 bg-dark text-light' : 'p-2 bg-light text-dark'
          }
          xs={2}
          md={4}
          lg={6}
        >
          <Col xs={12} md={4} className="pt-3">
            <img src={logo} alt="logo" height="50em" />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '2.8em',
                className: 'global-class-name footer_socialicons',
              }}
            >
              <MainLink
                link="https://www.instagram.com/bytectrl/"
                element={<FaFacebookF />}
              />
              <a href="https://www.instagram.com/bytectrl/">
                <FaInstagram />
              </a>
              <a href="https://discord.gg/9jZ9jg4t">
                <FaDiscord />
              </a>
              <a href="https://www.instagram.com/bytectrl/">
                <FaWhatsapp />
              </a>
            </IconContext.Provider>
          </Col>
          <Col
            xs={12}
            md={4}
            style={{ fontSize: '1.5em' }}
            className="text-muted text-center"
          >
            Copyright © 2022 All rights reserved by{' '}
            <span style={{ color: 'whitesmoke' }}>ByteCtrl</span>.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
