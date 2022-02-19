import React from 'react';
import { Container } from 'react-bootstrap';
import './OurBrands.css';
import logo1 from './OurBrandsAssets/1.png';

const OurBrands = (props) => {
  const BrandImages = () => {
    return (
      <img
        src={logo1}
        height={100}
        width={120}
        class="OurBrandsImg  col-md-3"
      />
    );
  };

  return (
    <Container fluid className="OurBrandsBG">
      <Container
        className={
          props.Theme
            ? 'OurBrandsContainer p-5 light'
            : 'OurBrandsContainer p-5 dark'
        }
      >
        <h5 class="OurBrandsHeading">Top Clients</h5>
        <h1>We worked with brands</h1>
        <div class="row">
          <BrandImages />
        </div>
      </Container>
    </Container>
  );
};

export default OurBrands;
