import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
