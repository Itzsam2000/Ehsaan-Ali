import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from "./components/home/home"
import About from './components/about/about'
import Photography from './components/photography/photography'
import Videography from './components/videography/videography'
import Contact from "./components/contact/contact"
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="about" element={<About />} activeStyle={{ color: 'white' }} />
            <Route path='/' element={<Home />} />
            <Route path="photography" element={<Photography />} />
            <Route path="contact" element={<Contact />} />
            <Route path="videography" element={<Videography />} />
          </Routes>

        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
}


export default App;
