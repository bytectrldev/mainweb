import React, { useState } from 'react';
import './Landing.css';
import Footer from '../../Components/Footer';
import Navbar1 from '../../Components/Navbar';
import TeamMember from '../../Components/TeamMember';
// import { Routes, Route } from 'react-router-dom';

const Landing = () => {
  const [Theme, setTheme] = useState(true);
  return (
    <>
      <Navbar1 Theme={Theme} setTheme={setTheme} />
      {/* <Routes>
        <Route path="/about" element={<Footer />} />
      </Routes> */}
      {/* <div className="tp"></div> */}
      <TeamMember Theme={Theme}/>
      <Footer Theme={Theme} />
    </>
  );
};

export default Landing;
