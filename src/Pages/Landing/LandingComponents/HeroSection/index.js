import React from 'react';
import './HeroSection.css';

var classname = 'HeroSection container text-center dark';
var classname1 = 'HeroSection container text-center light';

const HeroSection = (props) => {
  return (
    <div className={props.Theme ? classname1 : classname}>
      <h4 className="BrandName">
        <p className="lead">We Are</p>ByteCtrl
      </h4>
    </div>
  );
};

export default HeroSection;
