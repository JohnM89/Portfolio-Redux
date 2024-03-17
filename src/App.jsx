import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import AboutMe from './components/AboutMe/aboutme';

import Contact from './components/Contact/contact';
import Project from './components/Project/project';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navbar';
import Portfolio from './components/Portfolio/portfolio';

function App() {
  return (
    <div className="app">
      {/* Header always displayed at the top of all pages */}
      <Header>
        {/* NavBar included inside the Header */}
        <NavBar />
      </Header>

      {/* Main content that changes based on the route */}
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>

      {/* Footer always displayed at the bottom of all pages */}
      <Footer />
    </div>
  );
}

export default App;


export default App
