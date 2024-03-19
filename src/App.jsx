import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AboutMe from './components/AboutMe/aboutme';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';
import ParallaxSection from './utils/parallaxsection'; // Import the ParallaxSection component

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          {/* About Me section */}
          <section id="about">
            <AboutMe />
          </section>
          {/* Parallax section for space background */}
          <ParallaxSection id="parallax-1" backgroundImage="/images/space.webp" />
          {/* Portfolio section with parallax effect */}
          <section id="portfolio" className="portfolio-parallax">
            <Portfolio />
          </section>
          {/* Contact section */}
          <section id="contact">
            <Contact />
          </section>
          {/* Parallax section for water background */}
          <ParallaxSection id="parallax-2" backgroundImage="/images/water.webp" />
          {/* Resume section */}
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
