import React from 'react';
import './Landing.css';
import Footer from '../../Components/Footer';
import Navbar1 from '../../Components/Navbar';
// import { Routes, Route } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Navbar1 />
      {/* <Routes>
        <Route path="/about" element={<Footer />} />
      </Routes> */}
      <div className="tp"></div>
      <Footer />
    </>
  );
};

export default Landing;
