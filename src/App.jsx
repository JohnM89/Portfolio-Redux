import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AboutMe from './components/AboutMe/aboutme';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';
import ParallaxSection from './utils/parallaxsection';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <section id="about">
            <AboutMe />
          </section>
          {/* <ParallaxSection id="parallax-1" backgroundImage="/images/Okinawa.jpeg" className='parallex-custom-1' /> */}
          <section id="portfolio" className="portfolio-parallax">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <ParallaxSection id="parallax-2" backgroundImage="/images/water.webp"
          className='parallex-custom-2' />
          <section id="resume">
            
            <Resume />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
