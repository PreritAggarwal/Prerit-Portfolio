// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/certificates';


import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills/>
      <Certificates/>
      <Contact />
      <Footer />
      
      
      
    </div>
  );
};

export default App;
