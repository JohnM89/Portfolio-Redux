import { Routes, Route } from 'react-router-dom';
import './App.scss';
import AboutMe from './components/AboutMe/aboutme';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navbar';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="app">
      <Header>
        <NavBar />
      </Header>

      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
