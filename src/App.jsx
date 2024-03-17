import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import NavBar from './components/NavBar/navbar';
import AboutMe from './components/AboutMe/aboutme';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header>
          <NavBar />
        </Header>

        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
