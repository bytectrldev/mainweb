import React from 'react';
import { Container } from 'react-bootstrap';
import './OurBrands.css';
import logo1 from './OurBrandsAssets/1.png';
import logo2 from './OurBrandsAssets/2.png';
import logo3 from './OurBrandsAssets/4.png';
import logo4 from './OurBrandsAssets/5.png';

const OurBrands = (props) => {
  const BrandImages = (propsimg) => {
    return (
      <div className="OurBrandsImgContainer col">
        <img src={propsimg.logo} class="OurBrandsImg" />
        {/* <h6>{propsimg.BrandName}</h6> */}
      </div>
    );
  };

  return (
    <Container fluid className="OurBrandsBG">
      <Container
        className={
          props.Theme ? 'OurBrandsContainer light' : 'OurBrandsContainer dark'
        }
      >
        <h5 class="OurBrandsHeading">Top Clients</h5>
        <h1>We worked with brands</h1>
        <div class="row pt-5">
          <BrandImages logo={logo1} BrandName="Mahalaxmi Sanitary" />
          <BrandImages logo={logo2} BrandName="Sub Property" />
          <BrandImages logo={logo3} BrandName="ByteCtrl" />
          <BrandImages logo={logo4} BrandName="ByteCtrl" />
        </div>
      </Container>
    </Container>
  );
};

export default OurBrands;