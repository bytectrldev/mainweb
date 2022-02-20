import React from 'react';
import './Landing.css';
import Footer from '../../Components/Footer';
import Navbar1 from '../../Components/Navbar';
import HeroSection from './LandingComponents/HeroSection';
import OurBrands from './LandingComponents/OurBrands';
import TeamMember from '../../Components/TeamMember';
// import { Routes, Route } from 'react-router-dom';

const Landing = (props) => {
  return (
    <>
      <Navbar1 Theme={props.Theme} setTheme={props.setTheme} />
      {/* <Routes>
        <Route path="/about" element={<Footer />} />
      </Routes> */}
      <HeroSection Theme={props.Theme} />
      <OurBrands Theme={props.Theme} />
      <TeamMember Theme={props.Theme} />
      <Footer Theme={props.Theme} />
    </>
  );
};

export default Landing;
