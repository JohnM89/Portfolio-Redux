import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AboutMe from './components/AboutMe/aboutme';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';
import ParallaxSection from './utils/parallaxsection';
import { GroupBox, Button, ScrollView, Window, WindowContent, WindowHeader, styleReset } from 'react95';
import styled from 'styled-components';



// Import the necessary React95 components and styles
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

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
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
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="contact">
              <Contact />
            </section>


              
              
            <Window>
              
            
             
              <WindowContent >
                <ScrollView
          style={{ background: 'teal' }}>
                {/* <GroupBox variant='flat'> */}
            <ParallaxSection id="parallax-2" backgroundImage="/images/setup.jpg"
            className='parallax-custom-2' />
            {/* </GroupBox> */}
            </ScrollView>
            </WindowContent>
            </Window>
           


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
