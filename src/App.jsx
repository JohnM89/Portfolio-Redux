import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AboutMe from './components/AboutMe/aboutme';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';
import ParallaxSection from './utils/parallaxsection';


// Import the necessary React95 components and styles
import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <div className="app">
          {/* React95 Menu */}
          {/* <MenuList>
            <MenuListItem>🎤 Sing</MenuListItem>
            <MenuListItem>💃🏻 Dance</MenuListItem>
            <Separator />
            <MenuListItem disabled>😴 Sleep</MenuListItem>
          </MenuList> */}

          {/* Existing application structure */}
          <Header />
          <main>
            <section id="about">
              <AboutMe />
            </section>
            <section>
              <Portfolio />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <ParallaxSection id="parallax-2" backgroundImage="/images/water.webp"
            className='parallax-custom-2' />
            <section id="resume">
              <Resume />
            </section>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
