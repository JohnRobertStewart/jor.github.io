import React from 'react';
import Home from './assets/components/Home';
import NavBar from './assets/components/NavBar';
import Experience from './assets/components/Experience';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Portfolio from './assets/components/Portfolio';
import SocialLinks from './assets/components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className= "h-fit">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks/>
    </div>
  );
}

export default App;
