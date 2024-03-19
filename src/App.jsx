import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AboutMe from './components/AboutMe/aboutme';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <section id="about">
            <AboutMe />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
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
