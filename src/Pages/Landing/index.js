import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
// import { Routes, Route } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/about" element={<Footer />} />
      </Routes> */}
      <Footer />
    </>
  );
};

export default Landing;
